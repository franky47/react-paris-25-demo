import { database } from '@root/db/queries'
import { Album } from '@root/ui/views/demos/albums/album'
import { AlbumGrid } from '@root/ui/views/demos/albums/album-grid'
import { Filters } from '@root/ui/views/demos/albums/filters'
import { loadFilters } from '@root/ui/views/demos/albums/filters-search-params'
import type { Route } from './+types/albums'

export async function loader({
  request,
}: Route.LoaderArgs) {
  const { query, releaseYear } = loadFilters(request)
  const albums = await database.findAlbums({
    query,
    releaseYear,
  })
  return {
    albums,
  }
}

export default function AlbumsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <Filters />
      <AlbumGrid>
        {loaderData.albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </AlbumGrid>
    </>
  )
}
