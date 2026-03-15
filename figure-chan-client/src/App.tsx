import { useEffect } from "react";
import AuthLayout from "./layout/AuthLayout";
import BaseLayout from "./layout/BaseLayout";
import ProfileLayout from "./layout/ProfileLayout";
import { useAppDispatch } from "./hooks/reduxHooks";
import { loadingState } from "./features/slices/loadingSlice";
import authUserToken from "./services/authServices";
import { loginUser } from "./features/slices/userSlice";

function App(props: { page: string }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function authUser() {
      try {
        dispatch(loadingState(true));
        const apiResponse = await authUserToken();
        const result = await apiResponse.json();
        if (!apiResponse.ok) {
          throw new Error(result.message);
        }
        dispatch(
          loginUser({
            username: result.username,
            profileLink: result.profilePic,
          }),
        );
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(loadingState(false));
      }
    }
    authUser();
  });
  switch (props.page) {
    case "base":
      return <BaseLayout />;
    case "profile":
      return <ProfileLayout />;
    case "auth":
      return <AuthLayout />;
    default: {
      return <BaseLayout />;
    }
  }
}
export default App;
