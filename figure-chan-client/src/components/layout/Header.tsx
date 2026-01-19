import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import style from "../../styles/layout.module.scss";
import { loadingState } from "../../features/slices/loadingSlice";
//import Loading from "./Loading";
import { useState, type FormEvent } from "react";
import { initializeMessage } from "../../features/slices/notificationSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import useMobileSize from "../../hooks/useMobileSize";
import MobNavigation from "../mobile/button/MobNavigation";
import Search from "./Search";
import { HStack } from "@chakra-ui/react";
import IconButton from "../common/button/IconButton";
import Navigation from "./Navigation";
import LinkButton from "../common/button/LinkButton";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [isError, setIsError] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);

  //const loading = useAppSelector((state) => state.loading);
  const notification = useAppSelector((state) => state.notification);
  const user = useAppSelector((state) => state.user);

  const isSmallScreen = useMobileSize();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleLogoutUser(e: FormEvent) {
    e.preventDefault();

    try {
      dispatch(loadingState(true));
      console.log("Insert Function Here");

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
              <HStack>
                <button onClick={handleLogoutUser}></button>
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
