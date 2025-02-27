import { CounterButton } from '@workspace/ui/views/demos/counter/counter-button'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-12">
      <Suspense>
        <CounterButton />
      </Suspense>
    </div>
  )
}
