import { Image } from "@chakra-ui/react";
import style from "../../styles/layout.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect, useReducer, useState } from "react";
import type { CloudinaryImage } from "@cloudinary/url-gen/index";
import { getCloudinaryImage } from "../../utils/cloudinary";
import Notification from "../../components/layout/Notification";
import { Link, useNavigate, useParams } from "react-router-dom";
import IconButton from "../../components/common/button/IconButton";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import { loadingState } from "../../features/slices/loadingSlice";
import { initializeMessage } from "../../features/slices/notificationSlice";
import { getUserProfileAPI } from "../../services/userServices";

const initialProfileState = {
  profilePhoto: null,
};
interface State {
  profilePhoto: CloudinaryImage | null;
}
type Action = { type: "initialize"; profilePic: CloudinaryImage | null };

function profileReducer(state: State, action: Action) {
  switch (action.type) {
    case "initialize":
      return {
        profilePhoto: action.profilePic || state.profilePhoto,
      };
    default:
      throw new Error("Unable to fetch user profile.");
  }
}
function ProfilePage() {
  // const user = useAppSelector((state) => state.user);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const [profileState, dispatch] = useReducer(
    profileReducer,
    initialProfileState,
  );
  const notification = useAppSelector((state) => state.notification);
  const profileDispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function renderProfileView() {
      try {
        profileDispatch(loadingState(true));

        const apiResponse = await getUserProfileAPI(String(id));

        const result = await apiResponse.json();

        if (!apiResponse.ok) {
          throw new Error(result.message);
        }
        const profileImg = getCloudinaryImage(result.profilePic);
        dispatch({
          type: "initialize",
          profilePic: profileImg,
        });
      } catch (error) {
        setIsError(true);
        profileDispatch(initializeMessage(String(error)));
        navigate("/error");
      } finally {
        profileDispatch(loadingState(false));
      }
    }
    renderProfileView();
  }, [id, navigate, profileDispatch]);

  useEffect(() => {}, [profileDispatch, notification]);
  return (
    <>
      {notification ? (
        <Notification notification={String(notification)} isError={isError} />
      ) : (
        <></>
      )}
      <div className={style.profilePageContainer}>
        <div>
          <div
            className={style.profileBannerContainer}
            style={{ backgroundColor: "white" }}
          >
            <Image
              src={profileState.profilePhoto?.toURL()}
              className={style.profileBannerImg}
            />
            <Link to={"/profile/edit/account"} className={style.editButton}>
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
    </>
  );
}
export default ProfilePage;
