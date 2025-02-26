'use client'

import { Button } from '@workspace/ui/components/button'
import { useState } from 'react'

export function CounterMemory() {
  const [count, setCount] = useState(0)
  return (
    <Button onClick={() => setCount((c) => c + 1)}>In Memory: {count}</Button>
  )
}
