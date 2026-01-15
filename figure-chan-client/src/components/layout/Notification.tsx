import { Alert } from "@chakra-ui/react";
import style from "../../styles/layout.module.scss";

function Notification(props: { notification: string; isError: boolean }) {
  return (
    <Alert.Root
      status={props.isError ? "error" : "success"}
      variant={"solid"}
      padding={".5em"}
      animationName={style.notificationPopup}
      animationDuration={"5s"}
      className={style.notificationContainer}
    >
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Description>{props.notification}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}
export default Notification;
