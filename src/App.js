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

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./HomePage";
// import UserPage from "./UserPage";
// import UsersPage from "./UsersPage";
// import { userLoader, usersLoader } from "./userLoader";
// import Layout from "./Layout";
// import ErrorBoundary from "./ErrorBoundary.js";
// import DashboardLayout from "./DashboardLayout.jsx";
// import Profile from "./Profile.jsx";
// import Settings from "./Settings.jsx";

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
//         errorElement: <ErrorBoundary />,
//         children: [
//           {
//             path: ":id",
//             element: <UserPage />,
//             loader: userLoader,
//             errorElement: <ErrorBoundary />,
//           },
//         ],
//       },
//       {

//         path: "/dashboard",
//         element: <DashboardLayout />,
//         children: [
//           {
//             path: "profile",
//             element: <Profile />,
//           },
//           {
//             path: "settings",
//             element: <Settings />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

// suspense handling ...
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout";
import ErrorBoundary from "./ErrorBoundary.js";

// Lazy load the Dashboard components
const HomePage = lazy(() => import("./HomePage"));
const UserPage = lazy(() => import("./UserPage"));
const UsersPage = lazy(() => import("./UsersPage"));
const DashboardLayout = lazy(() => import("./DashboardLayout"));
const Profile = lazy(() => import("./Profile"));
const Settings = lazy(() => import("./Settings"));
const { userLoader, usersLoader } = require("./userLoader");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading HomePage...</div>}>
            <HomePage />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<div>Loading UsersPage...</div>}>
            <UsersPage />
          </Suspense>
        ),
        loader: usersLoader,
        errorElement: <ErrorBoundary />,
        children: [
          {
            path: ":id",
            element: (
              <Suspense fallback={<div>Loading UserPage...</div>}>
                <UserPage />
              </Suspense>
            ),
            loader: userLoader,
            errorElement: <ErrorBoundary />,
          },
        ],
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <DashboardLayout />
          </Suspense>
        ),
        errorElement: <ErrorBoundary />,
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<div>Loading Profile...</div>}>
                <Profile />
              </Suspense>
            ),
            errorElement: <ErrorBoundary />,
          },
          {
            path: "settings",
            element: (
              <Suspense fallback={<div>Loading Settings...</div>}>
                <Settings />
              </Suspense>
            ),
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
