import zod from "zod";

import { checkIfEmailIsExist } from "../actions/create-user";

export const CreateUserSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: "Min length of the name is 3 characters" }),

  email: zod
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .refine(async (e) => {
      // Where checkIfEmailIsExist makes a request to the backend
      // to see if the email is valid.
      return await checkIfEmailIsExist(e);
    }, "This email is already in our database"),
});
