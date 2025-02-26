import { CounterMemory } from '@workspace/ui/views/demos/counter/counter-memory'
import { CounterUrl } from '@workspace/ui/views/demos/counter/counter-url'
import { Title } from '@workspace/ui/views/demos/title'

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Title />
        <CounterMemory />
        <CounterUrl />
      </div>
    </div>
  )
}
