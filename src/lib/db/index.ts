import { Pool } from "pg";

// Db connection variable
let dbPool;

if (!dbPool) {
  dbPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
}

export default dbPool as Pool;
