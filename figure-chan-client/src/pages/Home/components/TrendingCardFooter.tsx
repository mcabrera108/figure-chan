import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import style from "../../../styles/layout.module.scss";
import { Image } from "@chakra-ui/react";
import {
  killakill,
  madoka,
  nendo,
  testImgOne,
} from "../../../features/ui/test/testcard_data";
import "swiper/swiper-bundle.css";

function TrendingCardFooter() {
  const carouselImgs = [
    killakill,
    testImgOne,
    nendo,
    madoka,
    killakill,
    testImgOne,
    nendo,
    madoka,
    killakill,
    testImgOne,
  ];
  return (
    <Swiper
      spaceBetween={20}
      direction="horizontal"
      speed={2000}
      slidesPerView={"auto"}
      modules={[Autoplay, Navigation]}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      className={style.holderContainer}
    >
      {carouselImgs.map((item) => {
        return (
          <SwiperSlide className={style.slideContainer}>
            <Image
              rounded={"md"}
              src={item}
              width={"150px"}
              fit={"cover"}
              position={"center"}
              className={style.carouselImg}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default TrendingCardFooter;
