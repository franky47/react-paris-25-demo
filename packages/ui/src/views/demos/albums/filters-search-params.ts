import { parseAsInteger, parseAsString } from 'nuqs/server'

// Describe the search params we accept
export const filtersSearchParams = {
  query: parseAsString.withDefault(''),
  releaseYear: parseAsInteger,
}
