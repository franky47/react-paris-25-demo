'use client'

import { Input } from '@workspace/ui/components/input'
import { cn } from '@workspace/ui/lib/utils'
import { useQueryStates } from 'nuqs'
import { ComponentProps } from 'react'
import { filtersSearchParams, filtersUrlKeys } from './filters-search-params.js'

export function Filters({ className, ...props }: ComponentProps<'nav'>) {
  const [{ query }, setSearchParams] = useQueryStates(filtersSearchParams, {
    urlKeys: filtersUrlKeys,
    shallow: false,
  })
  return (
    <nav className={cn('px-4 mt-2', className)} {...props}>
      <Input
        value={query}
        onChange={(e) => setSearchParams({ query: e.target.value })}
        placeholder="Search albums"
      />
    </nav>
  )
}
