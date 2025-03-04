import { CounterButton } from '@workspace/ui/views/demos/counter/counter-button'
import { Link } from 'react-router'

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center mt-12">
        <CounterButton />
      </div>
      <nav className="mt-24 text-center">
        <Link to="/albums" className="underline text-gray-500">
          SSR demo
        </Link>
      </nav>
    </>
  )
}
