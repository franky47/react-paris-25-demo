## nuqs hooks

This is how to use the useQueryState hook from nuqs:

```ts
import { useQueryState, parseAsInteger } from 'nuqs'

// state is string | null
const [state, setState] = useQueryState('key')

// Eg: passing options inline
// passing a default value makes state non-nullable
const [state, setState] = useQueryState('key', { defaultValue: '' })

// Using parsers for non-string types:
// type of int is number | null
const [int, setInt] = useQueryState('key', parseAsInteger)

// Passing a default value using the builder pattern on parsers:
// type of int is number
const [int, setInt] = useQueryState('key', parseAsInteger.withDefault(0))
```

This is how to use the useQueryStates hook from nuqs
(prefer using it when working with a descriptor object):

```ts
import { useQueryStates, parseAsInteger, parseAsString } from 'nuqs'

const searchParams = {
  a: parseAsString.withDefault(''),
  b: parseAsInteger.withDefault(0),
}

// state is { a: string, b: number }
const [state, setState] = useQueryStates(searchParams)
```

useQueryStates supports a urlKeys option to specify shorthands
for the variable names when serializing to the URL:

```ts
import {
  type UrlKeys,
  parseAsString,
  parseAsInteger,
  createLoader,
} from 'nuqs/server'

const searchParams = {
  variableA: parseAsString.withDefault(''),
  variableB: parseAsInteger.withDefault(0),
}
const searchParamsUrlKeys: UrlKeys<typeof searchParams> = {
  variableA: 'a',
  variableB: 'b',
}

const loadSearchParams = createLoader(searchParams, {
  urlKeys: searchParamsUrlKeys,
})
```

### Imports

Prefer importing from `nuqs/server` when in shared code, to
allow using it in either client or server code in Next.js app router:

```ts
import { parseAsInteger, parseAsString, type UrlKeys } from 'nuqs/server'
```

The hooks can only be imported from `nuqs`, in a client file (containing the
`"use client"` directive at the top of the file):

```ts
'use client'

import { parseAsInteger, useQueryState, useQueryState } from 'nuqs'
```

### Clearing the URL

To clear a query parameter from the URL, set it to `null`:

```ts
const [, setState] = useQueryState('key')
setState(null) // removes `key` from the URL

const [, setSearchParams] = useQueryStates({
  a: parseAsString,
  b: parseAsInteger,
})
setSearchParams(null) // Clears both a & b from the URL, but leaves other params as-is
```
