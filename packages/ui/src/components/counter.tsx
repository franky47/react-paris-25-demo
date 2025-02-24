'use client'

import { parseAsInteger, useQueryState } from 'nuqs'
import { Button } from './button.js'

export function Counter() {
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0)
  )
  return <Button onClick={() => setCount((c) => c + 1)}>{count}</Button>
}
