import { faker } from "@faker-js/faker";
import db from "../src/lib/db";

const createUser = async (email: string, name: string): Promise<boolean> => {
  try {
    await db.query(`INSERT INTO users (email, name)
      VALUES ('${email}', '${name}')`);
    return true;
  } catch (error) {
    console.error("An error ocurred in createUser ->", error);
  }
  return false;
};

faker.seed(123);

async function main() {
  for (let i = 0; i < 10; i++) {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();

    await createUser(
      faker.internet.email(firstname, lastname),
      `${firstname} ${lastname}`
    );
  }
}

main();
