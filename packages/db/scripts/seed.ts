import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import { generateText } from 'ai'
import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { ollama } from 'ollama-ai-provider'
import { db } from '../src/index.ts'
import { albums } from '../src/schema.ts'

const llama32 = ollama('llama3.2')

const spotify = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID!,
  process.env.SPOTIFY_CLIENT_SECRET!
)

async function processAlbumRow(line: string) {
  const [_rank, _year, album, artist] = line.split(',')
  const searchResult = await spotify.search(
    `${album} ${artist}`,
    ['album'],
    'FR',
    1
  )
  const result = searchResult.albums.items[0]
  if (!result) {
    console.info('No result for %s by %s', album, artist)
    return
  }

  const { text: cleanedUpAlbumName } = await generateText({
    model: llama32,
    messages: [
      {
        role: 'system',
        content:
          `Your role is to cleanup album names,` +
          ` removing attributes like "(Deluxe Edition)"` +
          ` or "(Remastered)" from the album name.` +
          ` Keep capitalization and other parts of the name intact.` +
          ` Do not add, change or remove any other words or punctuation.` +
          ` Reply only with the cleaned up album name.`,
      },
      {
        role: 'user',
        content: result.name,
      },
    ],
  })

  try {
    const [insert] = await db
      .insert(albums)
      .values({
        id: result.id,
        name: cleanedUpAlbumName,
        artist: result.artists
          .map((a) => a.name)
          .join(', '),
        coverUrl: result.images[0]!.url,
        releaseYear: parseInt(
          result.release_date.slice(0, 4)
        ),
        tracks: result.total_tracks,
      })
      .onConflictDoNothing()
      .returning()
    console.log(
      `Saved: ${insert?.name} by ${insert?.artist} (RS: ${album}, fetched: ${result.name})`
    )
  } catch (error) {
    console.error(
      'Failed to save %s by %s:',
      album,
      artist,
      error
    )
  }
}

async function streamAlbumsCsv() {
  const fileStream = createReadStream(
    resolve(import.meta.dirname, '..', 'albums.csv'),
    'utf-8'
  )

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })

  let isFirstLine = true
  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false
      continue
    }
    await processAlbumRow(line)
  }
}

async function runSeed() {
  console.log('⏳ Running seed...')
  const start = performance.now()

  await streamAlbumsCsv()

  const end = performance.now()
  console.log(`✅ Seed completed in ${end - start}ms`)
}

runSeed().catch((err) => {
  console.error('❌ Seed failed')
  console.error(err)
  process.exit(1)
})
