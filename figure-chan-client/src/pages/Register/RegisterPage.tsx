import { useEffect, useReducer, useState, type FormEvent } from "react";
import Notification from "../../components/layout/Notification";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import style from "../../styles/layout.module.scss";
import { Link } from "react-router-dom";
import { Button, Field, Input, InputGroup, Stack } from "@chakra-ui/react";
import { LuAsterisk, LuUser } from "react-icons/lu";
import { loadingState } from "../../features/slices/loadingSlice";
import {
  initializeMessage,
  uninitializeMessage,
} from "../../features/slices/notificationSlice";
import getPasswordStrengthValue from "./utils/getPasswordStrengthValue";
import {
  PasswordInput,
  PasswordStrengthMeter,
} from "../../features/ui/password-input";
import {
  passwordHasOneLetter,
  passwordHasOneNumber,
  passwordHasOneSpecialCharacter,
  passwordIsAboveCharCount,
  passwordValidator,
} from "../../utils/passwordStrengthUtil";
import { registerUserAPI } from "../../services/userServices";
import Loading from "../../components/layout/Loading";
const initialRegisterState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
interface State {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}
interface Action {
  type: "update" | "reset";
  field: "username" | "password" | "email" | "confirmPassword";
  value: string;
}

function registerReducer(state: State, action: Action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return initialRegisterState;
    default:
      throw new Error("Unable to update UI form");
  }
}
function RegisterPage() {
  const loading = useAppSelector((state) => state.loading);
  const notification = useAppSelector((state) => state.notification);
  const [isError, setIsError] = useState(false);
  const [state, dispatch] = useReducer(registerReducer, initialRegisterState);

  const registerDispatch = useAppDispatch();

  function handleRegisterChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "update",
      field: e.target.name as
        | "username"
        | "password"
        | "confirmPassword"
        | "email",
      value: e.target.value,
    });
  }

  async function handleUserRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      registerDispatch(loadingState(true));

      if (!state.username || !state.password || !state.email) {
        throw new Error("Please enter valid information.");
      }

      if (
        !state.confirmPassword ||
        state.password !== state.confirmPassword ||
        passwordValidator(state.password) === false
      ) {
        throw new Error("Please enter a valid password");
      }

      const apiResponse = await registerUserAPI(
        state.username,
        state.email,
        state.password,
      );

      const result = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(result.message);
      }

      setIsError(false);
      registerDispatch(initializeMessage(String(result.message)));
    } catch (error) {
      setIsError(true);
      registerDispatch(initializeMessage(String(error)));
    } finally {
      dispatch({
        type: "reset",
        field: "username",
        value: "",
      });
      registerDispatch(loadingState(false));
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsError(false);
      registerDispatch(uninitializeMessage(null));
    }, 5000);

    return () => clearTimeout(timer);
  }, [registerDispatch, notification]);

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
      <div className={style.authPageContainer} aria-label="Register Card">
        <div className={style.formHeaderContainer}>
          <h2 className={style.formHeader}>Register New User</h2>
          <h4 className={style.formSubHeader}>
            Or <Link to={"/login"}>log in</Link> to your existing account.
          </h4>
        </div>
        <form
          onSubmit={(e) => {
            handleUserRegister(e);
          }}
        >
          <div>
            <Stack gap={"4"} width={"100%"} alignItems={"center"}>
              <Field.Root maxW={"lg"}>
                <Field.Label>
                  Email <LuAsterisk />
                </Field.Label>
                <InputGroup startElement={<LuUser />}>
                  <Input
                    variant={"flushed"}
                    size={"lg"}
                    name="email"
                    value={state.email}
                    onChange={handleRegisterChange}
                    placeholder="EX: example@email.com"
                    _placeholder={{ color: "gray" }}
                    autoComplete="true"
                  />
                </InputGroup>
              </Field.Root>

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
                    onChange={handleRegisterChange}
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
                  onChange={handleRegisterChange}
                />
                <PasswordStrengthMeter
                  value={getPasswordStrengthValue(state.password)}
                  width={"100%"}
                />
                <Field.HelperText
                  color={
                    passwordIsAboveCharCount(state.password) ? "white" : "red"
                  }
                >
                  Password must be greater than or equal to 8 characters.
                </Field.HelperText>
                <Field.HelperText
                  color={
                    passwordHasOneSpecialCharacter(state.password)
                      ? "white"
                      : "red"
                  }
                >
                  Password must contain one special character.
                </Field.HelperText>
                <Field.HelperText
                  color={passwordHasOneLetter(state.password) ? "white" : "red"}
                >
                  Password must contain one letter.
                </Field.HelperText>
                <Field.HelperText
                  color={passwordHasOneNumber(state.password) ? "white" : "red"}
                >
                  Password must contain one number.
                </Field.HelperText>
              </Field.Root>

              <Field.Root maxW={"lg"}>
                <Field.Label>
                  Confirm Password <LuAsterisk />
                </Field.Label>
                <PasswordInput
                  variant={"flushed"}
                  size={"lg"}
                  name="confirmPassword"
                  value={state.confirmPassword}
                  onChange={handleRegisterChange}
                />
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
    </>
  );
}
export default RegisterPage;
