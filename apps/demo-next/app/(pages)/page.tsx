import { CounterButton } from '@root/ui/views/demos/counter/counter-button'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center mt-12">
        <Suspense>
          <CounterButton />
        </Suspense>
      </div>
      <nav className="mt-24 text-center">
        <Link
          href="/albums"
          className="underline text-gray-500"
        >
          SSR demo
        </Link>
      </nav>
    </>
  )
}
