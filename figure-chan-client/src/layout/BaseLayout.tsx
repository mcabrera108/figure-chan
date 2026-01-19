import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import style from "../styles/layout.module.scss";
import { getCloudinaryImage } from "../utils/cloudinary";
function BaseLayout() {
  const myImage = getCloudinaryImage("godzilla_nhi07c");
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
