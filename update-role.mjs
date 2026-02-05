import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function main() {
  const client = await pool.connect();
  try {
    // Check current role
    const check = await client.query(
      'SELECT id, email, name, role FROM "User" WHERE email = $1',
      ['anturozario63@gmail.com']
    );
    console.log('Current user:', check.rows[0]);

    // Update to ADMIN
    const result = await client.query(
      'UPDATE "User" SET role = $1 WHERE email = $2 RETURNING id, email, name, role',
      ['ADMIN', 'anturozario63@gmail.com']
    );
    console.log('Updated user:', result.rows[0]);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(console.error);
