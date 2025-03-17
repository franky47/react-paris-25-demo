'use client'

import { Fragment, type ComponentProps } from 'react'
import { cn } from '../lib/utils.js'

type QuerySpyProps = {
  useSearchParams: () => URLSearchParams
}

export function QuerySpy({
  useSearchParams,
}: QuerySpyProps) {
  const searchParams = useSearchParams()
  const items = Array.from(searchParams.entries())
    .filter(([, value]) => value !== null)
    .map(([key, value], index, list) => (
      <Fragment key={key + value}>
        <span className="font-semibold text-[#002654] dark:text-[#00acff]">
          {key}
        </span>
        <span className="text-gray-700 dark:text-gray-300">
          =
        </span>
        <span className="font-semibold text-[#cd1126] dark:text-[#fe6497]">
          {value.replaceAll(' ', '+')}
        </span>
        {index < list.length - 1 && (
          <span className="text-gray-700 dark:text-gray-300">
            &
          </span>
        )}
      </Fragment>
    ))
  if (items.length === 0) {
    return (
      <QuerySpyBackground className="italic text-gray-500">
        &lt;empty query&gt;
      </QuerySpyBackground>
    )
  }
  return (
    <QuerySpyBackground>
      <span className="text-gray-700 dark:text-gray-300">
        ?
      </span>
      {items}
    </QuerySpyBackground>
  )
}

export function QuerySpyBackground({
  className,
  ...props
}: ComponentProps<'pre'>) {
  return (
    <pre
      className={cn(
        'text-2xl border px-3 py-2 mx-2 my-2 rounded-lg',
        className
      )}
      {...props}
    />
  )
}
