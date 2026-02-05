import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// This is a one-time setup route to initialize the database
// DELETE THIS FILE after running it once for security!
export async function GET() {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'DATABASE_URL not set' },
        { status: 500 }
      )
    }

    // Run prisma db push to create tables
    const { stdout, stderr } = await execAsync('npx prisma db push --skip-generate')

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully!',
      output: stdout,
      errors: stderr || 'None',
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: 'Failed to initialize database',
        details: error.message,
        stderr: error.stderr,
      },
      { status: 500 }
    )
  }
}
