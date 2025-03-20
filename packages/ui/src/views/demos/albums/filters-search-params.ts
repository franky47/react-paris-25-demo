import {
  createLoader,
  createSerializer,
  parseAsInteger,
  parseAsString,
  UrlKeys,
} from 'nuqs/server'

// Describe the search params we accept
export const filtersSearchParams = {
  query: parseAsString.withDefault(''),
  releaseYear: parseAsInteger,
}

export const filtersUrlKeys: UrlKeys<
  typeof filtersSearchParams
> = {
  query: 'q',
  releaseYear: 'year',
}

export const loadFilters = createLoader(
  filtersSearchParams,
  {
    urlKeys: filtersUrlKeys,
  }
)

export const serializeFilters = createSerializer(
  filtersSearchParams,
  {
    urlKeys: filtersUrlKeys,
  }
)
