import layout from "../styles/layout.module.scss";
import { Box, Card, Stack } from "@chakra-ui/react";
import CardHeader from "@/features/cardLayout/CardHeader";
import {
  faCamera,
  faFire,
  faGift,
  faMessage,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, HashNavigation, Keyboard, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDNAME,
  },
});
const myImage = cld.image("godzilla_nhi07c");
const swiperSlide = cld.image("elieloh_rk4fde");
const fieloh = cld.image("fieloh_dd0bf3");
const elaineloh = cld.image("elaine_g3hqf6");

function HomePage() {
  return (
    <>
      <div className={layout.mainContainer}>
        <div className={layout.cardLayoutContainer}>
          <div className={layout.mainContent}>
            <Card.Root className={layout.cardContainer}>
              <CardHeader
                headerTitle={"Trending Posts"}
                headerIcon={faCamera}
              />

              <Card.Body className={layout.cardBody}>
                <AdvancedImage cldImg={myImage} />
              </Card.Body>
              <Card.Footer>
                <Swiper
                  slidesPerView={5}
                  hashNavigation={{ watchState: true }}
                  className={layout.swiper}
                  spaceBetween={20}
                  navigation={true}
                  loop={true}
                  speed={1500}
                  autoplay={{
                    delay: 1000,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Navigation, Keyboard, Autoplay, HashNavigation]}
                >
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={elaineloh} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={myImage} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={elaineloh} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={fieloh} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={swiperSlide} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={elaineloh} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={myImage} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={elaineloh} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={fieloh} />
                  </SwiperSlide>
                  <SwiperSlide className={layout.swiperSlide}>
                    <AdvancedImage cldImg={swiperSlide} />
                  </SwiperSlide>
                </Swiper>
              </Card.Footer>
            </Card.Root>

            <Card.Root className={layout.cardContainer}>
              <CardHeader headerTitle={"Boards"} headerIcon={faMessage} />
              <Card.Body className={layout.cardBody}>
                <Stack width={"100%"}>
                  <Card.Root
                    className={layout.cardRowContainer}
                    flexDirection={"row"}
                  >
                    <div className={layout.boardPreviewImg}>
                      <AdvancedImage cldImg={elaineloh} />
                    </div>
                    <Box
                      className={layout.cardRowBody}
                      flexDirection={"column"}
                    >
                      <Card.Title
                        className={`${layout.cardTitle} ${layout.boardPreviewTitle}`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Dolor sit amet consectetur adipiscing elit quisque
                        faucibus.
                      </Card.Title>
                      <Card.Body>This is the card body.</Card.Body>
                    </Box>
                  </Card.Root>
                  <Card.Root
                    className={layout.cardRowContainer}
                    flexDirection={"row"}
                  >
                    <div className={layout.boardPreviewImg}>
                      <AdvancedImage cldImg={elaineloh} />
                    </div>
                    <Box
                      className={layout.cardRowBody}
                      flexDirection={"column"}
                    >
                      <Card.Title
                        className={`${layout.cardTitle} ${layout.boardPreviewTitle}`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Dolor sit amet consectetur adipiscing elit quisque
                        faucibus.
                      </Card.Title>
                      <Card.Body>This is the card body.</Card.Body>
                    </Box>
                  </Card.Root>
                  <Card.Root
                    className={layout.cardRowContainer}
                    flexDirection={"row"}
                  >
                    <div className={layout.boardPreviewImg}>
                      <AdvancedImage cldImg={elaineloh} />
                    </div>
                    <Box
                      className={layout.cardRowBody}
                      flexDirection={"column"}
                    >
                      <Card.Title
                        className={`${layout.cardTitle} ${layout.boardPreviewTitle}`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Dolor sit amet consectetur adipiscing elit quisque
                        faucibus.fafsfsfsfasfasfsafsfsfs
                      </Card.Title>
                      <Card.Body>This is the card body.</Card.Body>
                    </Box>
                  </Card.Root>
                  <Card.Root
                    className={layout.cardRowContainer}
                    flexDirection={"row"}
                  >
                    <div className={layout.boardPreviewImg}>
                      <AdvancedImage cldImg={elaineloh} />
                    </div>
                    <Box
                      className={layout.cardRowBody}
                      flexDirection={"column"}
                    >
                      <Card.Title
                        className={`${layout.cardTitle} ${layout.boardPreviewTitle}`}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Dolor sit amet consectetur adipiscing elit quisque
                        faucibus.
                      </Card.Title>
                      <Card.Body>This is the card body.</Card.Body>
                    </Box>
                  </Card.Root>
                </Stack>
              </Card.Body>
            </Card.Root>
            <Card.Root className={layout.cardContainer}>
              <CardHeader headerTitle={"Recommended"} headerIcon={faGift} />
              <Card.Body
                className={layout.entryListContainer}
                flexDirection={"row"}
                gap={"10px"}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                <AdvancedImage cldImg={elaineloh} />
                <AdvancedImage cldImg={fieloh} />
                <AdvancedImage cldImg={swiperSlide} />
                <AdvancedImage cldImg={elaineloh} />
                <AdvancedImage cldImg={fieloh} />
                <AdvancedImage cldImg={swiperSlide} />
                <AdvancedImage cldImg={elaineloh} />
                <AdvancedImage cldImg={fieloh} />
                <AdvancedImage cldImg={swiperSlide} />
                <AdvancedImage cldImg={elaineloh} />
                <AdvancedImage cldImg={fieloh} />
                <AdvancedImage cldImg={swiperSlide} />
                <AdvancedImage cldImg={elaineloh} />
                <AdvancedImage cldImg={fieloh} />
                <AdvancedImage cldImg={swiperSlide} />
              </Card.Body>
            </Card.Root>
          </div>
          <div className={layout.sideContent}>
            <Card.Root className={layout.cardContainer}>
              <CardHeader headerTitle={"Top 10"} headerIcon={faFire} />

              <Card.Body className={layout.cardBody}>
                <Stack width={"100%"}>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                </Stack>
              </Card.Body>
            </Card.Root>

            <Card.Root className={layout.cardContainer}>
              <CardHeader headerTitle={"News"} headerIcon={faNewspaper} />

              <div className={layout.cardRowSubHeaderTitle}>
                Popular Articles
              </div>
              <Card.Body className={layout.cardBody}>
                <Stack width={"100%"}>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                </Stack>
              </Card.Body>
              <div className={layout.cardRowSubHeaderTitle}>
                Recent Articles
              </div>
              <Card.Body className={layout.cardBody}>
                <Stack width={"100%"}>
                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>

                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>

                  <Link to="/">
                    <Card.Root
                      flexDirection={"row"}
                      className={layout.cardRowContainer}
                    >
                      <div className={layout.rowImg}>
                        <AdvancedImage cldImg={elaineloh} />
                      </div>
                      <Box className={layout.cardRowBody}>
                        <Card.Body>
                          <Card.Title className={layout.cardTitle}>
                            This is a Test Title
                          </Card.Title>
                          <Card.Description className={layout.cardDesc}>
                            This is a sample description
                          </Card.Description>
                        </Card.Body>
                      </Box>
                    </Card.Root>
                  </Link>
                </Stack>
              </Card.Body>
            </Card.Root>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
