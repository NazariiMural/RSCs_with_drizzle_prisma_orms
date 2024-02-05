import * as usersSchema from "@/lib/db/schema/users";
import { User } from "@/lib/db/schema/users";
import { neonClient } from "@/lib/db";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, ilike } from "drizzle-orm";

const db = drizzle(neonClient, { schema: usersSchema });

export const getUsers = async (search: string = ""): Promise<User[]> => {
  try {
    /*
      There are two syntax in drizzle - use one you like and be consistent
    */

    // // SQL like syntax
    // const usersFromSQLLikeQuery: User[] = await db
    //   .select()
    //   .from(usersSchema.users)
    //   .limit(9)
    //   .offset(0)
    //   .where(ilike(usersSchema.users.name, `%${search}%`));

    // // Query syntax
    // const usersFromQuery: User[] = await db.query.users.findMany({
    //   limit: 1,
    //   offset: 9,
    //   where: ilike(usersSchema.users.name, `%${search}%`),
    // });
    //
    // return [...usersFromSQLLikeQuery, ...usersFromQuery];

    // SQL like syntax
    const users: User[] = await db
      .select()
      .from(usersSchema.users)
      .where(ilike(usersSchema.users.name, `%${search}%`));
    return users;
  } catch (error) {
    // ~TODO: Send error to the crash service
    console.error("An error ocurred in getUsers function ->", error);
    throw error;
  }
};

export const getUsersByEmail = async (email: string): Promise<User | null> => {
  try {
    const userFromQuery = (
      await db
        .select()
        .from(usersSchema.users)
        .limit(1)
        .where(eq(usersSchema.users.email, email))
    )[0];

    return userFromQuery ?? null;
  } catch (error) {
    // ~TODO: Send error to the crash service
    console.error("An error ocurred in getUsersByEmail function ->", error);
    throw error;
  }
};

export const insertUser = async (
  payload: Omit<User, "id">
): Promise<boolean> => {
  try {
    const result = await db.insert(usersSchema.users).values({
      email: payload.email,
      name: payload.name,
    });

    return !!result.rowCount;
  } catch (error) {
    // ~TODO: Send error to the crash service
    console.error("An error ocurred in insertUser function ->", error);
    throw error;
  }
};
