import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error/ErrorPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import EditAccountPage from "./pages/Profile/EditAccountPage";
import EditProfilePage from "./pages/Profile/EditProfilePage";
import { useAppSelector } from "./hooks/reduxHooks";

function Router() {
  const user = useAppSelector((state) => state.user);

  function protectedLoader() {
    if (!user.username) {
      return redirect("/error");
    }

    return null;
  }

  function guestLoader() {
    if (user.username) {
      return redirect("/error");
    }
    return null;
  }
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
      loader: guestLoader,
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
        {
          loader: protectedLoader,
          path: "/profile/edit/account",
          element: <EditAccountPage />,
        },
        {
          loader: protectedLoader,
          path: "/profile/edit/profile",
          element: <EditProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default Router;
