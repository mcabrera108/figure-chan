import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import style from "../../styles/layout.module.scss";
import ProfileSettingsHeader from "./components/ProfileSettingsHeader";
import { useQuery } from "@tanstack/react-query";
import Notification from "../../components/layout/Notification";
import Loading from "../../components/layout/Loading";
import { initializeMessage } from "../../features/slices/notificationSlice";
import { getUserAccountSettingsAPI } from "../../services/userServices";

function EditAccountPage() {
  const user = useAppSelector((state) => state.user);
  const profileDispatch = useAppDispatch();

  async function getAccountSettings(id: string) {
    try {
      const apiResponse = await getUserAccountSettingsAPI(String(id));
      const result = await apiResponse.json();

      if (!apiResponse.ok) {
        console.log(apiResponse);
        throw new Error(result.message);
      }

      return result;
    } catch (error) {
      profileDispatch(initializeMessage(String(error)));
    }
  }
  const { data, isPending, error } = useQuery({
    queryKey: ["accountSettings", user.username],
    queryFn: () => getAccountSettings(String(user.username)),
  });
  const notification = useAppSelector((state) => state.notification);

  if (isPending) {
    return <Loading />;
  }
  return (
    <>
      {notification ? (
        <Notification
          notification={String(notification)}
          isError={error ? true : false}
        />
      ) : (
        <></>
      )}
      <div className={style.editProfilePageContainer}>
        <div className={style.editProfileWrapper}>
          <ProfileSettingsHeader />
          <div className={style.editProfileMainContainer}>
            <div className={style.editProfileField}>
              <span>Username</span>
              <span>{data?.username}</span>
            </div>
            <div className={style.editProfileField}>
              <span>Email Address</span>
              <span>{data?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditAccountPage;
