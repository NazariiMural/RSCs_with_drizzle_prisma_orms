"use server";

import { ZodError } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateUserSchema } from "@/lib/zodValidationSchemas/user";

export const checkIfEmailIsExist = async (value: string): Promise<boolean> => {
  return new Promise((res) => setTimeout(() => res(true), 150));
};

export const createUser = async (formData: FormData) => {
  const rawFormData = {
    username: formData.get("user-name"),
    email: formData.get("user-email"),
  };

  // const rawFormData = Object.fromEntries(formData.entries());
  // Validate form fields using Zod
  try {
    const validatedFields = await CreateUserSchema.parseAsync(rawFormData);
    console.log("validatedFields", validatedFields);

    // mutate data
    // revalidate cache

    revalidatePath("/");
    redirect("/");
  } catch (error) {
    // If form validation fails, return errors.
    const e = error as ZodError<typeof CreateUserSchema.shape>;
    const errors = e.flatten().fieldErrors;
    return errors;
  }
};
