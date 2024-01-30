import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUsers = async (search?: string): Promise<User[]> => {
  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    return users;
  } catch (error) {
    console.error("An error ocurred in getUsers function ->", error);
  }
  return [];
};

export const getUsersCount = async (search: string): Promise<number> => {
  try {
    const totalUsers = await prisma.user.count({
      where: {
        name: {
          contains: search,
        },
      },
    });
    return totalUsers;
  } catch (error) {
    console.error("An error ocurred in totalUsers function ->", error);
  }
  return 0;
};
