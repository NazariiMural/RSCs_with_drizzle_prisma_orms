import { Metadata } from "next";
import Spinner from "../components/spinner";
import CreateUserForm from "./form";

export const metadata: Metadata = {
  title: "Create user",
  description: "This is a create user page.",
};

export default async function CreateUserPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-8 pt-12">
      Create user page
      <CreateUserForm />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <Spinner spinnerClassName="h-5 w-5 animate-spin text-gray-400 mt-0" />
      </div>
    </div>
  );
}
