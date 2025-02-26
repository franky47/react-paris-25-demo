import fs from 'node:fs/promises'
import { resolve } from 'node:path'
import { db } from '../src/index.ts'

const albums = await db.query.albums.findMany()

for (const { id, coverUrl, name, artist } of albums) {
  // Download the image in the cwd directory,
  // and name it {id}.jpg,
  // using built-in Node.js APIs
  const res = await fetch(coverUrl)

  if (!res.ok) {
    throw new Error(`Failed to fetch image from ${coverUrl}`)
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  const nextJsPath = resolve(
    import.meta.dirname,
    `../../../apps/demo-next/public/img/albums/${id}.jpg`
  )
  const rrv7Path = resolve(
    import.meta.dirname,
    `../../../apps/demo-react-router/public/img/albums/${id}.jpg`
  )
  await Promise.all([
    fs.writeFile(nextJsPath, buffer),
    fs.writeFile(rrv7Path, buffer),
  ])
  console.info('✅📥🖼️  %s - %s by %s', id, name, artist)
}
