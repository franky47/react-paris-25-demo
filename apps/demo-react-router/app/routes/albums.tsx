import { database } from '@workspace/db/queries'
import { Album } from '@workspace/ui/views/demos/albums/album'
import { AlbumGrid } from '@workspace/ui/views/demos/albums/album-grid'
import type { Route } from './+types/albums'

export async function loader({
  request,
}: Route.LoaderArgs) {
  const albums = await database.findAlbums()
  return {
    albums,
  }
}

export default function AlbumsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <>
      <AlbumGrid>
        {loaderData.albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </AlbumGrid>
    </>
  )
}
