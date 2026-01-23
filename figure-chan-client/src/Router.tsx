import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error/ErrorPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App page={"base"} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/",
      element: <App page={"auth"} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/profile",
      element: <App page={"profile"} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/profile",
          element: <Navigate to={"/"} />,
        },
        {
          path: "/profile/:id",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Router;
