import sql from './src/lib/server/db'

async function testConnection() {
  try {
    const result = await sql`SELECT NOW() as current_time`
    console.log('✅ Database connected successfully!')
    console.log('Current time from database:', result[0].current_time)
    process.exit(0)
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    process.exit(1)
  }
}

testConnection()