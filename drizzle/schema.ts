import { pgTable, uniqueIndex, serial, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey().notNull(),
    email: text("email").notNull(),
    name: text("name").notNull(),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("users_email_key").on(table.email),
    };
  }
);
