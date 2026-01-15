import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App page="base" />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Router;
