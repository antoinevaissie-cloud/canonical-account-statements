import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.cwd(), 'prisma')
const sqlite = path.join(root, 'schema.prisma')
const pg = path.join(root, 'schema.postgres.prisma')

const url = process.env.DATABASE_URL || ''
const isPg = url.startsWith('postgres://') || url.startsWith('postgresql://')

if (isPg) {
  if (fs.existsSync(pg)) {
    fs.copyFileSync(pg, sqlite)
    console.log('[prisma] Selected PostgreSQL schema')
  } else {
    console.warn('[prisma] PostgreSQL schema not found; using default schema.prisma')
  }
} else {
  console.log('[prisma] Using default (SQLite) schema')
}

