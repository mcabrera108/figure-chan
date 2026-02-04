import { useEffect } from "react";
import style from "../../styles/layout.module.scss";
import ProfileSettingsHeader from "./components/ProfileSettingsHeader";

function EditAccountPage() {
  useEffect(() => {}, []);
  return (
    <div className={style.editProfilePageContainer}>
      <div className={style.editProfileWrapper}>
        <ProfileSettingsHeader />
        <div className={style.editProfileMainContainer}>
          <div className={style.editProfileField}>
            <span>Username:</span>
            <span>Hello</span>
          </div>
          <div className={style.editProfileField}>
            <span>Email Address:</span>
            <span>World</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditAccountPage;
