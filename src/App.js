import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import UsersPage from "./UsersPage";
import { userLoader, usersLoader } from "./userLoader";
import Navbar from "./Navbar";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: "users/:id",
        element: <UserPage />,
        loader: userLoader,
      },
    ],
  },
]);

function App() {
  <Navbar />;
  return <RouterProvider router={router} />;
}

export default App;
