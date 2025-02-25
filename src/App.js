import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import UsersPage from "./UsersPage";
import { userLoader, usersLoader } from "./userLoader";
import Navbar from "./Navbar";
import Layout from "./Layout";
import ErrorBoundary from "./ErrorBoundary.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "users",
        element: <UsersPage />,
        loader: usersLoader,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "users/:id",
        element: <UserPage />,
        loader: userLoader,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

function App() {
  <Navbar />;
  return <RouterProvider router={router} />;
}

export default App;
