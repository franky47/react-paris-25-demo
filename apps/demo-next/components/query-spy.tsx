'use client'

import { QuerySpy } from '@root/ui/components/query-spy'
import { useSearchParams } from 'next/navigation'
export { QuerySpyBackground } from '@root/ui/components/query-spy'

export function NextQuerySpy() {
  return <QuerySpy useSearchParams={useSearchParams} />
}
