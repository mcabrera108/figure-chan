import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import layout from "../styles/layout.module.scss";
import authUserToken from "../services/authServices";
import { useAppDispatch } from "../hooks/reduxHooks";
import { loginUser } from "../features/slices/userSlice";
interface BoxProps {
  children?: ReactNode;
}
function AuthContext(props: BoxProps) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function authUser() {
      try {
        setIsLoading(true);
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
        setIsLoading(false);
      }
    }
    authUser();
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div className={layout.loadingScreen}>
          <div className={layout.loaderContainer}>
            <div className={layout.loader}></div>
            <div>Loading...</div>
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  );
}
export default AuthContext;
