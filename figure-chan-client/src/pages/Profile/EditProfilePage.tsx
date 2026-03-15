import style from "../../styles/layout.module.scss";
import ProfileSettingsHeader from "./components/ProfileSettingsHeader";
function EditProfilePage() {
  return (
    <div className={style.editProfilePageContainer}>
      <div className={style.editProfileWrapper}>
        <ProfileSettingsHeader />
        <div className={style.editProfileMainContainer}>
          <div className={style.editProfileField}>
            <span>Banner Background</span>
            <span></span>
          </div>
          <div className={style.editProfileField}>
            <span>Banner Color</span>
            <span></span>
          </div>
          <div className={style.editProfileField}>
            <span>Navigation Color</span>
            <span></span>
          </div>
          <div className={style.editProfileField}>
            <span>Profile Background</span>
            <span></span>
          </div>
          <div className={style.editProfileField}>
            <span>Content Card Color</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfilePage;
