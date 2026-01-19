import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import style from "../../../styles/layout.module.scss";
import { killakill } from "../../../features/ui/test/testcard_data";
// function postUrlParse(url: string) {
//   const urlStr = new URL(url);

//   return urlStr.pathname.split("/")[4];
// }
function TrendingCardBody() {
  return (
    <div className={style.trendingImgContainer}>
      <Link to={`/`}>
        <Image
          rounded={"md"}
          src={killakill}
          fit={"cover"}
          position={"center"}
          className={style.trendingImg}
        />
      </Link>
    </div>
  );
}
export default TrendingCardBody;
