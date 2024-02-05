import { getUsers } from "@/lib/queries";

export default async function UsersTable({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Add artificial delay to show loader
  // await new Promise<void>((res) => setTimeout(() => res(), 1500));

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const users = await getUsers(search);

  const currentSearchParams = new URLSearchParams();

  if (search) {
    currentSearchParams.set("search", search);
  }

  return (
    <div className="my-8 overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-[62px] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:w-auto">
              ID
            </th>
            <th className="w-[130px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:w-auto">
              Name
            </th>
            <th className="w-[175px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:w-auto">
              Email
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="max-w-[130px] truncate whitespace-nowrap px-3 py-4 text-sm font-medium sm:w-auto">
                {user.name}
              </td>
              <td className="max-w-[175px] truncate whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:w-auto">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
