import { Image } from "@chakra-ui/react";
import style from "../../styles/layout.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import type { CloudinaryImage } from "@cloudinary/url-gen/index";
import { getCloudinaryImage } from "../../utils/cloudinary";
import { Link } from "react-router-dom";
import IconButton from "../../components/common/button/IconButton";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
function ProfilePage() {
  const user = useAppSelector((state) => state.user);
  const [profileImg, setProfileImg] = useState<null | CloudinaryImage>(null);

  useEffect(() => {
    async function renderProfileView() {
      if (user.profileLink) {
        const profileImg = getCloudinaryImage(user.profileLink);
        setProfileImg(profileImg);
      }
    }
    renderProfileView();
  }, [user]);
  return (
    <div className={style.profilePageContainer}>
      <div>
        <div
          className={style.profileBannerContainer}
          style={{ backgroundColor: "white" }}
        >
          <Image src={profileImg?.toURL()} className={style.profileBannerImg} />
          <Link to={"/"} className={style.editButton}>
            <IconButton iconImg={faPencilSquare} iconClass={style.editIcon} />
            Edit Profile
          </Link>
        </div>
        <div className={style.profileNavigationContainer}></div>
      </div>

      <div className={style.profilePageContentContainer}>
        <div className={style.mainContentContainer}>Hello</div>
        <div className={style.sideContentContainer}>World</div>
      </div>
    </div>
  );
}
export default ProfilePage;
