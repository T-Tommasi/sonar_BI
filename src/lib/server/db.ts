import postgres from 'postgres'
import { env } from '$env/dynamic/private'

const connectionString = env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const sql = postgres(connectionString)

export default sql