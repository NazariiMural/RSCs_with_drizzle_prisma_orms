"use client";

import { useFormState, useFormStatus } from "react-dom";

import { createUser } from "@/lib/actions/create-user";
import { CreateAction, CreateUserError } from "@/lib/actions/shared/types";
import Spinner from "../components/spinner";

const initialState: CreateAction<CreateUserError> = {};

export default function CreateUserForm() {
  const [state, formAction] = useFormState(createUser, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="space-y-3">
      <div className="rounded-md py-4">
        <div className="relative mb-5">
          <input
            type="text"
            name="user-name"
            id="user-name"
            className="w-full rounded-md border-gray-300 pl-5 text-sm focus:border-gray-400 focus:outline-none focus:ring-0"
            placeholder="User name"
            required
          />
          {state.errors?.name && !pending && (
            <span className="absolute left-5 top-9 inline-block w-full text-sm text-red-700">
              {state.errors?.name[0]}
            </span>
          )}
        </div>
        <div className="relative mb-5">
          <input
            type="email"
            name="user-email"
            id="user-email"
            className="w-full rounded-md border-gray-300 pl-5 text-sm focus:border-gray-400 focus:outline-none focus:ring-0"
            placeholder="User email"
            required
          />
          {state.errors?.email && !pending && (
            <span className="absolute left-5 top-9 inline-block w-full text-sm text-red-700">
              {state.errors?.email[0]}
            </span>
          )}
          {state.errors?.general && !pending && (
            <span className="absolute left-5 top-9 inline-block w-full text-sm text-red-700">
              {state.errors?.general}
            </span>
          )}
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="relative mt-8">
      <button
        type="submit"
        aria-disabled={pending}
        className="rounded-md border border-indigo-600 bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create user
      </button>
      {pending && (
        <div className="pointer-events-none absolute inset-y-0 left-28 flex items-center pr-3">
          <Spinner spinnerClassName="h-5 w-5 animate-spin text-gray-400 mt-0" />
        </div>
      )}
    </div>
  );
}
