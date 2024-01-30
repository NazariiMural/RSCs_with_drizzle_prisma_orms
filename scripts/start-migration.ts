import db from "../src/lib/db";
import { readFileSync } from "fs";

// IMPORTANT this file will 'end' current DB connection
// This file can be run using certain command `npm run migration -- 20240101000001_start_up_migration/migration.sql`

const queryText = readFileSync(
  `src/lib/db/migrations/${process.argv[2]}`,
  "utf-8"
);

export const main = async () => {
  let result;
  try {
    await db.query("BEGIN");
    result = await db.query(queryText);
    await db.query("COMMIT");
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  } finally {
    console.log(
      "Result of the migration is:",
      !!result ? "Success" : "Failure"
    );
    console.log(result);
    db.end();
  }
};

main();
