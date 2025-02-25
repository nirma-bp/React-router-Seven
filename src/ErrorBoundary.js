// import { useRouteError } from "react-router-dom";

// export default function ErrorBoundary() {
//   const error = useRouteError();

//   return (
//     <div>

//     </div>
//   );
// }

import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error Occurred error page</h1>
      {/* <p>{error.statusText || error.message}</p> */}
      <p>{error?.message || "An unexpected error occurred."}</p>
    </div>
  );
}

export default ErrorBoundary;
