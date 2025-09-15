import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await response.json();

  const getUserSort = () => {
    if (sortOrder === "name") {
      return sort(users).asc([(u) => u.name]);
    }
    if (sortOrder === "email") {
      return sort(users).asc([(u) => u.email]);
    }
    return users;
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>

          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {getUserSort().map((user) => (
          <tr key={user.id}>
            <td> {user.name}</td>
            <td> {user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
