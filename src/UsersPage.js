import { useLoaderData } from "react-router-dom";

function UsersPage() {
  const users = useLoaderData();

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
