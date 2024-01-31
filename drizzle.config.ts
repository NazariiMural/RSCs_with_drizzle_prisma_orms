import type { Config } from "drizzle-kit";

// This file created to be used with `drizzle-kit introspect:pg` command

export default {
  schema: "./src/lib/db/schema*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DIRECT_URL,
  },
} as Config;
