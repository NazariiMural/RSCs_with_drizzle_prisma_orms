import { pgTable, uniqueIndex, serial, text } from "drizzle-orm/pg-core";

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

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type
