// import { useLoaderData } from "react-router-dom";

// function UsersPage() {
//   const users = useLoaderData();

//   console.log(users);

//   return (
//     <div>
//       <h1>All Users</h1>
//       <ul>
//         {users &&
//           users.length > 0 &&
//           users?.map((user) => (
//             <li key={users?.id || ""}>
//               {user?.firstName} {user?.lastName} - {user?.email}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default UsersPage;

import { Outlet, useLoaderData, Link } from "react-router-dom";

function UsersPage() {
  const users = useLoaderData();

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => (
            <li key={user?.id}>
              <Link to={`/users/${user?.id}`}>
                {user?.firstName} {user?.lastName} - {user?.email}
              </Link>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
      <Outlet />
    </div>
  );
}

export default UsersPage;
