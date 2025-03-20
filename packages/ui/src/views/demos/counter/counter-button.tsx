'use client'

import { Button } from '@root/ui/components/button'
import { parseAsInteger, useQueryState } from 'nuqs'

export function CounterButton() {
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0)
  )
  return (
    <Button onClick={() => setCount((c) => c + 1)}>
      With URL state: {count}
    </Button>
  )
}
