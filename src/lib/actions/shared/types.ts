import { CreateUserSchema } from "@/lib/zodValidationSchemas/user";
import { inferFlattenedErrors } from "zod";

type Status = "success" | "error";

export interface CreateAction<T> {
  status?: Status;
  errors?: { general?: string } & T;
}

// Helper types/value to generate type for zod flatten errors
const flatten = {} as inferFlattenedErrors<typeof CreateUserSchema>;
// This type will be used inside client or server components
export type CreateUserError = typeof flatten.fieldErrors;
