import type { ReactNode } from 'react'

export function AlbumGrid({ children }: { children: ReactNode }) {
  return (
    <section
      role="feed"
      className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-4"
    >
      {children}
    </section>
  )
}
