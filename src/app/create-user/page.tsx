import { Metadata } from "next";
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
    </div>
  );
}
