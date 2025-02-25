import { useLoaderData } from "react-router-dom";

function UserPage() {
  // the useLoaderData() hook retrieves the data returned by the loader function associated with the current route. When you define a loader function for a route, React Router automatically invokes this function when the route is matched, fetching the necessary data. The data returned by the loader is then made available to your component through the useLoaderData() hook.

  const userData = useLoaderData();

  return (
    <div>
      <h1 key={userData.id}>
        User: {userData.firstName} {userData.lastName}
      </h1>
      <p key={userData.id}>Email: {userData.email}</p>
      <p key={userData.id}>Age: {userData.age}</p>
      <p key={userData.id}>Gender: {userData.gender}</p>
    </div>
  );
}

export default UserPage;
