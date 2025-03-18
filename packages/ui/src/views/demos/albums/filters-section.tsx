import type { ComponentProps } from 'react'

export function FiltersSection(
  props: ComponentProps<'nav'>
) {
  return (
    <nav
      className="px-4 mt-2 flex flex-wrap gap-2 items-center"
      {...props}
    />
  )
}
