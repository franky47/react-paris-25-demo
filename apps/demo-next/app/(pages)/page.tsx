import { Counter } from '@workspace/ui/components/counter'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello, React Paris!</h1>
        <Suspense>
          <Counter />
        </Suspense>
      </div>
    </div>
  )
}
