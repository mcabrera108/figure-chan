import style from "../../styles/layout.module.scss";
import ProfileSettingsHeader from "./components/ProfileSettingsHeader";
function EditProfilePage() {
  return (
    <div className={style.editProfilePageContainer}>
      <div className={style.editProfileWrapper}>
        <ProfileSettingsHeader />
        <div>Hello</div>
      </div>
    </div>
  );
}
export default EditProfilePage;
