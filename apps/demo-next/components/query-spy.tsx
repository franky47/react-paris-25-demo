'use client'

import { QuerySpy } from '@workspace/ui/components/query-spy'
import { useSearchParams } from 'next/navigation'
export { QuerySpyBackground } from '@workspace/ui/components/query-spy'

export function NextQuerySpy() {
  return <QuerySpy useSearchParams={useSearchParams} />
}
