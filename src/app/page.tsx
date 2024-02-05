import { SearchInput } from "./components/search-input";
import { Suspense } from "react";
import Spinner from "./components/spinner";
import UsersTable from "./components/user-table";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 px-8 pt-12">
      <div className="flex items-center justify-between">
        <div className="mt-1 w-80">
          <SearchInput search={search} />
        </div>
        <div className="ml-16 mt-0 flex-none">
          <Link
            type="button"
            className="block rounded-md border border-indigo-600 bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="create-user"
          >
            Add user
          </Link>
        </div>
      </div>

      <Suspense
        fallback={
          <Spinner containerClassName="flex h-full grow items-center justify-center bg-gray-50" />
        }
      >
        <UsersTable searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
