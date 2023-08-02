import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/not-found-page.tsx";
import { App } from "../App.tsx";
// import ErrorPage from "../pages/error-page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    errorElement: <NotFound />,
  },
]);
