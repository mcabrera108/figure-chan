import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import QueryEntryPage from "./pages/QueryEntryPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/search",
          element: <QueryEntryPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Router;
