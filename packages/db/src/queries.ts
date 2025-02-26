import { db } from './index.ts'

type FindAlbumsQuery = {
  query: string
}

export function findAlbums({ query }: FindAlbumsQuery = { query: '' }) {
  return db.query.albums.findMany({
    where(fields, operators) {
      if (query) {
        return operators.or(
          operators.like(fields.name, `%${query}%`),
          operators.like(fields.artist, `%${query}%`)
        )
      }
      return undefined
    },
    columns: {
      updatedAt: false,
      createdAt: false,
    },
  })
}
