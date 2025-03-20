'use client'

import { Button } from '@root/ui/components/button'
import { Input } from '@root/ui/components/input'
import { useQueryStates } from 'nuqs'
import {
  filtersSearchParams,
  filtersUrlKeys,
  serializeFilters,
} from './filters-search-params.js'
import { FiltersSection } from './filters-section.js'

export function Filters() {
  const [{ query, releaseYear }, setSearchParams] =
    useQueryStates(filtersSearchParams, {
      shallow: false,
      urlKeys: filtersUrlKeys,
    })
  return (
    <>
      <FiltersSection>
        <Input
          value={query}
          onChange={(e) =>
            setSearchParams({ query: e.target.value })
          }
          placeholder="Search albums"
          className="text-xl py-5 flex-2 lg:flex-1"
        />
        <Input
          type="number"
          className="w-28 text-xl py-5 flex-1"
          value={releaseYear ?? ''}
          onChange={(e) =>
            setSearchParams({
              releaseYear: Number.isNaN(
                e.target.valueAsNumber
              )
                ? null
                : e.target.valueAsNumber,
            })
          }
          placeholder="Year"
        />
        <Button
          className="flex-1 text-lg px-4"
          onClick={() => setSearchParams(null)}
        >
          Clear
        </Button>
      </FiltersSection>
      <a
        href={serializeFilters({
          query: 'love',
          releaseYear: 1967,
        })}
      >
        Albums about love from 1967
      </a>
    </>
  )
}
