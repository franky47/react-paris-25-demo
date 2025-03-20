import { database } from '@root/db/queries'
import { AlbumGrid } from '@root/ui/demos/albums/album-grid'
import { Album } from '@root/ui/views/demos/albums/album'
import { Filters } from '@root/ui/views/demos/albums/filters'
import { loadFilters } from '@root/ui/views/demos/albums/filters-search-params'
import { type SearchParams } from 'nuqs/server'
import { Suspense } from 'react'

type PageProps = {
  searchParams: Promise<SearchParams>
}

export default async function AlbumsPage({
  searchParams,
}: PageProps) {
  const { query, releaseYear } =
    await loadFilters(searchParams)
  const albums = await database.findAlbums({
    query,
    releaseYear,
  })
  return (
    <>
      <Suspense>
        <Filters />
      </Suspense>
      <AlbumGrid>
        {albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </AlbumGrid>
    </>
  )
}
