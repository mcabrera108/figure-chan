import { useEffect, useReducer, useState, type FormEvent } from "react";
import Loading from "../../components/layout/Loading";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import style from "../../styles/layout.module.scss";
import Notification from "../../components/layout/Notification";
import { Link, useNavigate } from "react-router-dom";
import { Button, Field, Input, InputGroup, Stack } from "@chakra-ui/react";
import { LuAsterisk, LuUser } from "react-icons/lu";
import { PasswordInput } from "../../features/ui/password-input";
import { loadingState } from "../../features/slices/loadingSlice";
import {
  initializeMessage,
  uninitializeMessage,
} from "../../features/slices/notificationSlice";
import { loginUserAPI } from "../../services/userServices";
import { loginUser } from "../../features/slices/userSlice";

const initialLoginState = {
  username: "",
  password: "",
};
interface State {
  username: string;
  password: string;
}
type Action = { type: "update"; field: "username" | "password"; value: string };

function loginReducer(state: State, action: Action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      throw new Error("Unable to update UI form");
  }
}
function LoginPage() {
  const loading = useAppSelector((state) => state.loading);
  const [state, dispatch] = useReducer(loginReducer, initialLoginState);
  const notification = useAppSelector((state) => state.notification);
  const [isError, setIsError] = useState(false);

  const loginDispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "update",
      field: e.target.name as "username" | "password",
      value: e.target.value,
    });
  }

  async function handleUserLogin(e: FormEvent) {
    e.preventDefault();
    try {
      if (!state.username || !state.password) {
        throw new Error("Please enter valid credentials.");
      }
      loginDispatch(loadingState(true));

      const apiResponse = await loginUserAPI(state.username, state.password);

      const result = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(result.message);
      }

      loginDispatch(
        loginUser({
          username: result.username,
          profileLink: result.profilePic,
        }),
      );

      if (!result.username) {
        throw new Error("Please enter valid credentials.");
      }

      setIsError(false);
      navigate(`/profile/${result.username}`, { replace: true });
    } catch (error) {
      setIsError(true);
      loginDispatch(initializeMessage(String(error)));
    } finally {
      dispatch({
        type: "update",
        field: "password" as "username" | "password",
        value: "",
      });
      loginDispatch(loadingState(false));
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsError(false);
      loginDispatch(uninitializeMessage(null));
    }, 5000);

    return () => clearTimeout(timer);
  }, [loginDispatch, notification]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {notification ? (
        <Notification notification={String(notification)} isError={isError} />
      ) : (
        <></>
      )}
      <div className={style.authPageContainer} aria-label="Login Card">
        <div className={style.formHeaderContainer}>
          <h2 className={style.formHeader}>Login to your account</h2>
          <h4 className={style.formSubHeader}>
            Or <Link to={"/register"}>sign up</Link> for a new account.
          </h4>
        </div>
        <div className={style.authPageBodyContainer}>
          <form
            onSubmit={(e) => {
              handleUserLogin(e);
            }}
          >
            <div>
              <Stack gap={"4"} width={"100%"} alignItems={"center"}>
                <Field.Root maxW={"lg"}>
                  <Field.Label>
                    Username <LuAsterisk />
                  </Field.Label>
                  <InputGroup startElement={<LuUser />}>
                    <Input
                      variant={"flushed"}
                      size={"lg"}
                      name="username"
                      value={state.username}
                      onChange={handleLoginChange}
                      placeholder="EX: User12345"
                      _placeholder={{ color: "gray" }}
                      autoComplete="true"
                    />
                  </InputGroup>
                </Field.Root>

                <Field.Root maxW={"lg"}>
                  <Field.Label>
                    Password <LuAsterisk />
                  </Field.Label>
                  <PasswordInput
                    variant={"flushed"}
                    size={"lg"}
                    name="password"
                    value={state.password}
                    onChange={handleLoginChange}
                  />
                </Field.Root>

                <Field.Root maxW={"lg"} alignItems={"flex-end"}>
                  <Link
                    to={"/forgotpassword"}
                    style={{ textDecoration: "underline" }}
                  >
                    Forgot Your Password?
                  </Link>
                </Field.Root>

                <Field.Root maxW={"lg"} alignItems={"center"} marginTop={"1em"}>
                  <Button
                    className={style.authFormSubmitBtn}
                    width={"50%"}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Field.Root>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
