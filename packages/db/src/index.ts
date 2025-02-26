import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'

import { resolve } from 'node:path'
import * as schema from './schema.ts'

function resolveDatabasePath() {
  // Direct path when running migrations
  if ('dirname' in import.meta) {
    return resolve(import.meta.dirname, '../albums.db')
  }
  // node_modules path for dependent packages
  return resolve(process.cwd(), 'node_modules', '@workspace', 'db', 'albums.db')
}

console.log(resolveDatabasePath())

const databasePath = resolveDatabasePath()
const sqlite = new Database(databasePath)
export const db = drizzle(sqlite, { schema })
export { schema }

export type { Album, NewAlbum } from './schema.ts'
