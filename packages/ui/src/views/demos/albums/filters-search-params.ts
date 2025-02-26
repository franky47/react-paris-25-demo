import { createLoader, parseAsString, UrlKeys } from 'nuqs/server'

export const filtersSearchParams = {
  query: parseAsString.withDefault(''),
}

export const filtersUrlKeys: UrlKeys<typeof filtersSearchParams> = {
  query: 'q',
}

export const loadFilters = createLoader(filtersSearchParams, {
  urlKeys: filtersUrlKeys,
})
