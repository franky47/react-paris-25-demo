'use client'

import { Button } from '@workspace/ui/components/button'
import { useState } from 'react'

export function CounterButton() {
  const [count, setCount] = useState(0)
  return (
    <Button
      onClick={() => setCount((c) => c + 1)}
      size="lg"
    >
      With useState: {count}
    </Button>
  )
}
