'use client'

import { Button } from '@workspace/ui/components/button.js'
import { Input } from '@workspace/ui/components/input'
import { cn } from '@workspace/ui/lib/utils'
import { ComponentProps } from 'react'

export function Filters({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav
      className={cn('px-4 mt-2 flex gap-2 items-center', className)}
      {...props}
    >
      <Input
        // value={query}
        // onChange={(e) => setSearchParams({ query: e.target.value })}
        placeholder="Search albums"
      />
      <Input
        type="number"
        className="w-24"
        // value={releaseYear ?? undefined}
        // onChange={(e) => setSearchParams({ releaseYear: e.target.valueAsNumber })}
        placeholder="Year"
      />
      <Button>Clear</Button>
    </nav>
  )
}
