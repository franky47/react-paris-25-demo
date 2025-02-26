import { findAlbums } from '@workspace/db/queries'
import { AlbumGrid } from '@workspace/ui/demos/albums/album-grid'
import { Album } from '@workspace/ui/views/demos/albums/album'
import { Metadata } from 'next'

export default async function AlbumsPage() {
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

export const metadata = {
  title: 'Albums',
  description: 'View all albums',
} satisfies Metadata
