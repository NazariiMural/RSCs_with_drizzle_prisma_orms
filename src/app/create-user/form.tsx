import { createUser } from "@/lib/actions/create-user";

export default function CreateUserForm() {
  return (
    <form action={createUser} className="space-y-3">
      <div className="relative rounded-md py-4">
        <input
          type="text"
          name="user-name"
          id="user-name"
          className="mb-4 block w-full rounded-md border-gray-300 pl-5 text-sm focus:border-gray-400 focus:outline-none focus:ring-0"
          placeholder="User name"
          defaultValue="test"
        />
        <input
          type="email"
          name="user-email"
          id="user-email"
          className="mb-4 block w-full rounded-md border-gray-300 pl-5 text-sm focus:border-gray-400 focus:outline-none focus:ring-0"
          placeholder="User email"
          defaultValue="email"
          required
        />
        <button
          type="submit"
          aria-disabled={true}
          className="block rounded-md border border-indigo-600 bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}
