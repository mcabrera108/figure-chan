import style from "../../styles/layout.module.scss";

interface ProfileSettingsProps {
  field: string;
}
function ProfileSettingsField(props: ProfileSettingsProps) {
  return (
    <div className={style.editProfileField}>
      <span>{props.field}</span>
    </div>
  );
}
export default ProfileSettingsField;
