import { CounterButton } from '@workspace/ui/views/demos/counter/counter-button'
import { Title, TitleHint } from '@workspace/ui/views/demos/title'

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Title />
        <CounterButton />
        <TitleHint />
      </div>
    </div>
  )
}
