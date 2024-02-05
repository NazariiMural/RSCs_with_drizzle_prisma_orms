"use server";

import { ZodError } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateUserSchema } from "@/lib/zodValidationSchemas/user";
import { CreateAction, CreateUserError } from "../shared/types";
import { getUsersByEmail, insertUser } from "@/lib/db/queries/user";
import { isRedirectError } from "next/dist/client/components/redirect";

export const checkIfEmailIsExist = async (value: string): Promise<boolean> => {
  try {
    const res = await getUsersByEmail(value);
    return !res;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (
  prevState: unknown,
  formData: FormData
): Promise<CreateAction<CreateUserError>> => {
  const rawFormData = {
    name: formData.get("user-name"),
    email: formData.get("user-email"),
  };
  try {
    // Validate form fields using Zod
    const validatedFields = await CreateUserSchema.parseAsync(rawFormData);

    // mutate data
    await insertUser(validatedFields);

    // revalidate cache
    revalidatePath("/");
    // redirect
    return redirect("/");
  } catch (error) {
    // If form validation fails, return errors.
    if (error instanceof ZodError) {
      const e = error as ZodError<typeof CreateUserSchema.shape>;
      const errors = e.flatten().fieldErrors;
      return {
        status: "error",
        errors,
      };
    } else if (isRedirectError(error)) {
      return redirect("/");
    }

    console.log(error);
    return { status: "error", errors: { general: "Internal server error" } };
  }
};
