import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import style from "../styles/layout.module.scss";
import { getCloudinaryImage } from "../utils/cloudinary";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { uninitializeMessage } from "../features/slices/notificationSlice";
function BaseLayout() {
  const myImage = getCloudinaryImage("godzilla_nhi07c");
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.notification);

  useEffect(() => {
    dispatch(uninitializeMessage(null));
  }, [dispatch, notification]);
  return (
    <>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.623)), url(${myImage.toURL()})`,
          width: "100%",
          height: "100%",
          minHeight: "120vh",
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
export default BaseLayout;
