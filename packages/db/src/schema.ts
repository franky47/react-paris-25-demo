import { sql } from 'drizzle-orm'
import { integer, text } from 'drizzle-orm/sqlite-core'
import { sqliteTable } from './utils.ts'

export const albums = sqliteTable('albums', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  artist: text('artist').notNull(),
  coverUrl: text('cover_url').notNull(),
  releaseYear: integer('release_year').notNull(),
  tracks: integer('tracks').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', {
    mode: 'timestamp',
  }).default(sql`CURRENT_TIMESTAMP`),
})

export type Album = typeof albums.$inferSelect
export type NewAlbum = typeof albums.$inferInsert
