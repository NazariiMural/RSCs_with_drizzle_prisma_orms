import { User } from "@/shared-types";
import db from "@/lib/db";

export const getUsers = async (search: string = ""): Promise<User[]> => {
  try {
    const res = await db.query(`SELECT * FROM users 
      WHERE name LIKE '%${search}%'`);
    const users: User[] = res.rows;

    return users;
  } catch (error) {
    console.error("An error ocurred in getUsers function ->", error);
  }
  return [];
};
