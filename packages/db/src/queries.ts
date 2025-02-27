import { db } from './index.ts'

type FindAlbumsQuery = {
  query: string
  releaseYear: number | null
}

export function findAlbums(
  { query, releaseYear }: FindAlbumsQuery = { query: '', releaseYear: null }
) {
  return db.query.albums.findMany({
    where(fields, operators) {
      const searchOps = query
        ? operators.or(
            operators.like(fields.name, `%${query}%`),
            operators.like(fields.artist, `%${query}%`)
          )
        : undefined
      const yearOps =
        releaseYear && releaseYear > 1900
          ? operators.eq(fields.releaseYear, releaseYear)
          : undefined
      return operators.and(searchOps, yearOps)
    },
    columns: {
      updatedAt: false,
      createdAt: false,
    },
  })
}
