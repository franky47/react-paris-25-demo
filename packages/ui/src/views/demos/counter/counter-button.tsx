'use client'

import { Button } from '@root/ui/components/button'
import { useState } from 'react'

export function CounterButton() {
  const [count, setCount] = useState(0)
  return (
    <Button onClick={() => setCount((c) => c + 1)}>
      With useState: {count}
    </Button>
  )
}
