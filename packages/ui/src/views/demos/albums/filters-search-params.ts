import { createLoader, parseAsInteger, parseAsString } from 'nuqs/server'

export const filtersSearchParams = {
  query: parseAsString.withDefault(''),
  releaseYear: parseAsInteger,
}

export const loadFilters = createLoader(filtersSearchParams)
