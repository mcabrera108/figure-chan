import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import { getCloudinaryImage } from "../utils/cloudinary";
function BaseLayout() {
  const myImage = getCloudinaryImage("godzilla_nhi07c");
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.623)), url(${myImage.toURL()})`,
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
}
export default BaseLayout;
