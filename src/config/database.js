import 'dotenv/config';
<<<<<<< Updated upstream
import { neon, Pool } from '@neondatabase/serverless';
import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http';
import { drizzle as drizzleServerless } from 'drizzle-orm/neon-serverless';
=======
import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleHttp } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePg } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
>>>>>>> Stashed changes

let db;
let sql;

if (process.env.NODE_ENV === 'development') {
<<<<<<< Updated upstream
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

=======
  const devUrl = (process.env.DATABASE_URL || '').replace('localhost', 'neon-local').replace('127.0.0.1', 'neon-local');
  console.log('📡 Connecting via POSTGRES-JS to:', devUrl);

  const queryClient = postgres(devUrl);
  db = drizzlePg(queryClient);
  sql = queryClient;
} else {
  sql = neon(process.env.DATABASE_URL);
  db = drizzleHttp(sql);
}

>>>>>>> Stashed changes
export { db, sql };
