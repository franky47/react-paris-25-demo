'use client'

import { parseAsInteger, useQueryState } from 'nuqs'

export function Title() {
  const [value] = useQueryState('title', {
    defaultValue: 'there',
  })

  return <h1 className="text-2xl font-bold">Hello, {value}!</h1>
}

export function TitleHint() {
  const [count] = useQueryState('count', parseAsInteger.withDefault(0))
  if (count === 0) {
    return null
  }
  return (
    <em className="text-gray-600 dark:text-gray-400">
      Tip: try changing the{' '}
      <code className="font-mono font-semibold not-italic text-sm text-foreground">
        title
      </code>{' '}
      search param 😉
    </em>
  )
}
