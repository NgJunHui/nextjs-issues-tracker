import Link from "next/link";
import UserTable from "./UserTable";

interface UsersPageProps {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const { sortOrder } = await searchParams;
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
