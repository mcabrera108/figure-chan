import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { getCloudinaryImage } from "../utils/cloudinary";

function AuthLayout() {
  const myImage = getCloudinaryImage("godzilla_nhi07c");
  return (
    <>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.623)), url(${myImage.toURL()})`,
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          objectFit: "fill",
        }}
      >
        <Header />
        <main>
          <div>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default AuthLayout;
