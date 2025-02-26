import type { Album, NewAlbum } from '@workspace/db'
import {
  fetchAlbumData,
  findAlbumById,
  getSpotifyAlbumId,
} from '@workspace/db/spotify'
import type { SearchParams } from 'nuqs/server'
import { Suspense } from 'react'
import { loadSearchParams } from './search-params'
import { SearchClient } from './search.client'

type PageProps = {
  searchParams: Promise<SearchParams>
}

export default async function SearchPage({ searchParams }: PageProps) {
  const album = await findAlbum(searchParams)
  return (
    <>
      <SearchResults album={album} />
      <Suspense fallback={<div>Loading client...</div>}>
        <SearchClient album={album} />
      </Suspense>
    </>
  )
}

function NoResult() {
  return <div>No result found</div>
}

function AlbumView({
  artist,
  coverUrl,
  name,
  releaseYear,
  tracks,
}: Omit<Album, 'createdAt' | 'updatedAt'>) {
  return (
    <div>
      <img src={coverUrl} alt={name} />
      <h1>
        {name} by {artist}
      </h1>
      <p>
        {releaseYear} • {tracks} tracks
      </p>
    </div>
  )
}

async function findAlbum(searchParams: Promise<SearchParams>) {
  const { query, uri } = await loadSearchParams(searchParams)
  if (uri) {
    const id = getSpotifyAlbumId(uri)
    if (!id) {
      return null
    }
    const result = await findAlbumById(id)
    if (!result) {
      return null
    }
    return result
  }
  if (query) {
    const result = await fetchAlbumData(query)
    if (!result) {
      return null
    }
    return result
  }
  return null
}

async function SearchResults({ album }: { album: NewAlbum | null }) {
  if (!album) {
    return <NoResult />
  }
  return <AlbumView {...album} />
}
