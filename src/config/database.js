import 'dotenv/config';
import { neon, Pool } from '@neondatabase/serverless';
import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http';
import { drizzle as drizzleServerless } from 'drizzle-orm/neon-serverless';

let db;
let sql;

if (process.env.NODE_ENV === 'development') {
  // Use Postgres protocol (Pool) for local development
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  db = drizzleServerless(pool);
  sql = pool;
} else {
  // Use HTTP for production (Neon Cloud)
  sql = neon(process.env.DATABASE_URL);
  db = drizzleHttp(sql);
}

export { db, sql };
