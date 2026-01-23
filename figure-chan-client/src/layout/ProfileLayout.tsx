import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import style from "../styles/layout.module.scss";
//import { getCloudinaryImage } from "../utils/cloudinary";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { uninitializeMessage } from "../features/slices/notificationSlice";
function ProfileLayout() {
  //const myImage = getCloudinaryImage("godzilla_nhi07c");
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.notification);

  useEffect(() => {
    dispatch(uninitializeMessage(null));
  }, [dispatch, notification]);
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(36, 36, 36, 1)",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          objectFit: "fill",
        }}
      >
        <Header />
        <main>
          <div className={style.base}>
            <div className={style.baseLayoutContainer}>
              <Outlet />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default ProfileLayout;
