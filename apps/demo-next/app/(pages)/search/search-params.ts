import { getSpotifyAlbumId } from '@workspace/db/spotify'
import { createLoader, createParser, parseAsString, UrlKeys } from 'nuqs/server'

const parseAsSpotifyAlbumUri = createParser({
  parse(query) {
    const id = getSpotifyAlbumId(query)
    if (id) {
      return query
    }
    return null
  },
  serialize: (id) => id,
})

export const searchParams = {
  query: parseAsString,
  uri: parseAsSpotifyAlbumUri,
}
export const urlKeys: UrlKeys<typeof searchParams> = {
  query: 'q',
}

export const loadSearchParams = createLoader(searchParams, { urlKeys })
