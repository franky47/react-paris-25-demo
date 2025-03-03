import { findAlbums } from '@workspace/db/queries'
import { AlbumGrid } from '@workspace/ui/demos/albums/album-grid'
import { Album } from '@workspace/ui/views/demos/albums/album'

type PageProps = {}

export default async function AlbumsPage({}: PageProps) {
  const albums = await findAlbums()
  return (
    <>
      <AlbumGrid>
        {albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </AlbumGrid>
    </>
  )
}
