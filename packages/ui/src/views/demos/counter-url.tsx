'use client'

import { Button } from '@workspace/ui/components/button'
import { parseAsInteger, useQueryState } from 'nuqs'

export function CounterUrl() {
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0)
  )
  return <Button onClick={() => setCount((c) => c + 1)}>In URL: {count}</Button>
}
