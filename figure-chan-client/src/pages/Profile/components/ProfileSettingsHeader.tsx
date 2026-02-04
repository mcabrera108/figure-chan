import { Link } from "react-router-dom";
import style from "../../../styles/layout.module.scss";
function ProfileSettingsHeader() {
  return (
    <div className={style.settingHeaderContainer}>
      <div className={style.profileSettingsHeader}>Account Settings</div>
      <ul>
        <li>
          <Link to={"/profile/edit/account"}>Account</Link>
        </li>
        <li>
          <Link to={"/profile/edit/profile"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
}
export default ProfileSettingsHeader;
