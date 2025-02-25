import { useLoaderData } from "react-router-dom";

function UsersPage() {
  const users = useLoaderData();

  console.log(users);

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users &&
          users.length > 0 &&
          users?.map((user) => (
            <li key={us?.id || ""}>
              {user?.firstName} {user?.lastName} - {user?.email}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UsersPage;
