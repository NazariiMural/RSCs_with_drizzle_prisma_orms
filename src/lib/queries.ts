import * as usersSchema from "@/lib/db/schema/users";
import { User } from "@/lib/db/schema/users";
import { neonClient } from "@/lib/db";
import { drizzle } from "drizzle-orm/neon-http";
import { ilike } from "drizzle-orm";

const db = drizzle(neonClient, { schema: usersSchema });

export const getUsers = async (search: string = ""): Promise<User[]> => {
  try {
    /*
      There are two syntax in drizzle - use one you like and be consistent
    */

    // SQL like syntax
    const usersFromSQLLikeQuery: User[] = await db
      .select()
      .from(usersSchema.users)
      .limit(9)
      .offset(0)
      .where(ilike(usersSchema.users.name, `%${search}%`));

    // Query syntax
    const usersFromQuery: User[] = await db.query.users.findMany({
      limit: 1,
      offset: 9,
      where: ilike(usersSchema.users.name, `%${search}%`),
    });
    return [...usersFromSQLLikeQuery, ...usersFromQuery];
  } catch (error) {
    console.error("An error ocurred in getUsers function ->", error);
  }
  return [];
};
