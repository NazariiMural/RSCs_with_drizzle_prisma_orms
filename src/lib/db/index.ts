import { neon } from "@neondatabase/serverless";

// Db connection variable
export const neonClient = neon(process.env.DIRECT_URL!);
