// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./HomePage";
// import UserPage from "./UserPage";
// import UsersPage from "./UsersPage";
// import { userLoader, usersLoader } from "./userLoader";
// import Navbar from "./Navbar";
// import Layout from "./Layout";
// import ErrorBoundary from "./ErrorBoundary.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorBoundary />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//         errorElement: <ErrorBoundary />,
//       },
//       {
//         path: "users",
//         element: <UsersPage />,
//         loader: usersLoader,
//         children: [
//           {
//             path: ":id",
//             element: <UserPage />,
//             loader: userLoader,
//           },
//           // {
//           //   path: "home",
//           //   element: <HomePage />,
//           //   errorElement: <ErrorBoundary />,
//           // },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   <Navbar />;
//   return <RouterProvider router={router} />;
// }

// export default App;

// nested routing

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import UsersPage from "./UsersPage";
import { userLoader, usersLoader } from "./userLoader";
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
        children: [
          {
            path: ":id",
            element: <UserPage />,
            loader: userLoader,
            errorElement: <ErrorBoundary />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
