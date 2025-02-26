'use client'

import type { NewAlbum } from '@workspace/db'
import { getSpotifyAlbumId } from '@workspace/db/spotify'
import { Input } from '@workspace/ui/components/input'
import { useQueryStates } from 'nuqs'
import { searchParams } from './search-params'

type SearchClientProps = {
  album: NewAlbum | null
}

export function SearchClient({ album }: SearchClientProps) {
  const [{ uri }, setSearchParams] = useQueryStates(searchParams, {
    shallow: false,
  })
  return (
    <>
      <Input
        defaultValue={uri ?? ''}
        onChange={(e) => {
          const id = getSpotifyAlbumId(e.target.value)
          if (id) {
            setSearchParams({ uri: e.target.value })
          }
        }}
      />
      {album && <Input defaultValue={album.name} />}
    </>
  )
}
