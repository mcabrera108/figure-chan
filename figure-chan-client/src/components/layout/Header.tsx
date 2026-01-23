import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import style from "../../styles/layout.module.scss";
import { loadingState } from "../../features/slices/loadingSlice";
//import Loading from "./Loading";
import { useEffect, useState, type FormEvent } from "react";
import { initializeMessage } from "../../features/slices/notificationSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import useMobileSize from "../../hooks/useMobileSize";
import MobNavigation from "../mobile/button/MobNavigation";
import Search from "./Search";
import { Avatar, HStack, Menu, Portal } from "@chakra-ui/react";
import IconButton from "../common/button/IconButton";
import Navigation from "./Navigation";
import LinkButton from "../common/button/LinkButton";
import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloudinaryImage } from "@cloudinary/url-gen/index";
import { getCloudinaryImage } from "../../utils/cloudinary";
import { logoutUserAPI } from "../../services/userServices";
import { logoutUser } from "../../features/slices/userSlice";
export default function Header() {
  const [isError, setIsError] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  const [profileImg, setProfileImg] = useState<null | CloudinaryImage>(null);
  const notification = useAppSelector((state) => state.notification);
  const user = useAppSelector((state) => state.user);

  const isSmallScreen = useMobileSize();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleLogoutUser(e: FormEvent) {
    e.preventDefault();

    try {
      dispatch(loadingState(true));
      const apiResponse = await logoutUserAPI();

      const result = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(result.message);
      }
      dispatch(logoutUser({ username: null, profileLink: null }));

      setIsError(false);
      navigate("/");
    } catch (error) {
      setIsError(true);
      dispatch(initializeMessage(error));
    } finally {
      dispatch(loadingState(false));
    }
  }

  function handleSearchCollapsed() {
    setIsSearchCollapsed(!isSearchCollapsed);
  }
  function handleNavCollapsed() {}

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
    <>
      {notification ? (
        <Notification notification={String(notification)} isError={isError} />
      ) : (
        <></>
      )}
      <div className={style.headerContainer} aria-label="Header">
        <header className={style.headerWrapper}>
          <div className={style.logoContainer}>
            {isSmallScreen ? (
              <MobNavigation handleCollapse={handleNavCollapsed} />
            ) : (
              <></>
            )}
            <div className={style.logo} aria-label="Logo">
              <Link to={"/"}>{isSmallScreen ? `FC` : `Figure-Chan`}</Link>
            </div>
          </div>

          {isSmallScreen ? <></> : <Search />}

          <div className={style.loginBtnContainer}>
            {isSmallScreen ? (
              <IconButton
                iconImg={faSearch}
                iconClass={style.headerIconContainer}
                btnFunction={handleSearchCollapsed}
              />
            ) : (
              <></>
            )}
            {user.username ? (
              <HStack display={"flex"} alignItems={"center"}>
                <div>
                  <Menu.Root positioning={{ placement: "bottom" }}>
                    <Menu.Trigger
                      rounded="full"
                      focusRing="outside"
                      className={style.profileBtn}
                      focusVisibleRing={"none"}
                    >
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </Menu.Trigger>
                    <Portal>
                      <Menu.Positioner>
                        <Menu.Content className={style.profileMenu}>
                          <Menu.ItemGroup>
                            <Menu.ItemGroupLabel>Upload</Menu.ItemGroupLabel>
                            <Menu.Item
                              value="post"
                              className={style.profileMenuItem}
                            >
                              <Link to={"/"} className={style.menuLink}>
                                User Post
                              </Link>
                            </Menu.Item>
                            <Menu.Item
                              value="entry"
                              className={style.profileMenuItem}
                            >
                              <Link to={"/"} className={style.menuLink}>
                                Database Entry
                              </Link>
                            </Menu.Item>
                          </Menu.ItemGroup>
                        </Menu.Content>
                      </Menu.Positioner>
                    </Portal>
                  </Menu.Root>
                </div>
                <div>
                  <Menu.Root positioning={{ placement: "bottom" }}>
                    <Menu.Trigger
                      rounded="full"
                      focusRing="outside"
                      focusVisibleRing={"none"}
                    >
                      <Avatar.Root size="md" className={style.profileImg}>
                        <Avatar.Fallback name={user.username} />
                        <Avatar.Image src={profileImg?.toURL()} />
                      </Avatar.Root>
                    </Menu.Trigger>
                    <Portal>
                      <Menu.Positioner>
                        <Menu.Content className={style.profileMenu}>
                          <Menu.ItemGroup>
                            <Menu.ItemGroupLabel>
                              <Link
                                to={`/profile/${user.username}`}
                                className={style.menuLink}
                              >
                                {user.username}
                              </Link>
                            </Menu.ItemGroupLabel>
                            <Menu.Item
                              value="profile"
                              className={style.profileMenuItem}
                            >
                              <Link
                                to={`/profile/${user.username}`}
                                className={style.menuLink}
                              >
                                Profile
                              </Link>
                            </Menu.Item>
                            <Menu.Item
                              value="logout"
                              className={style.profileMenuItem}
                            >
                              <a
                                onClick={handleLogoutUser}
                                className={style.menuLink}
                              >
                                Logout
                              </a>
                            </Menu.Item>
                          </Menu.ItemGroup>
                        </Menu.Content>
                      </Menu.Positioner>
                    </Portal>
                  </Menu.Root>
                </div>
              </HStack>
            ) : (
              <HStack>
                <LinkButton
                  url="/login"
                  btnVariant={"solid"}
                  classStr={style.loginBtn}
                  btnName="Login"
                />
                <LinkButton
                  url="/register"
                  btnVariant={"solid"}
                  classStr={style.regBtn}
                  btnName="Register"
                />
              </HStack>
            )}
          </div>
        </header>
        {isSmallScreen ? <></> : <Navigation />}
      </div>

      {isSearchCollapsed && isSmallScreen ? (
        <div className={style.collapsedSearchContainer}>
          <Search />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
