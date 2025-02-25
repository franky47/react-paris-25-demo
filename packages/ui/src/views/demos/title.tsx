'use client'

import { useQueryState } from 'nuqs'

export function Title() {
  const [value] = useQueryState('title', {
    defaultValue: 'there',
  })
  return <h1 className="text-2xl font-bold">Hello, {value}!</h1>
}
