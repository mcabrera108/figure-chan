import MainCard from "../../components/common/card/MainCard";
import style from "../../styles/layout.module.scss";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import TrendingCardBody from "./components/TrendingCardBody";
import TrendingCardFooter from "./components/TrendingCardFooter";
function HomePage() {
  const mainContent = [
    {
      title: "Trending",
      headerIcons: {
        iconImg: faCamera,
        label: "Trending",
      },
      headerButtons: [
        {
          buttonName: "Today",
          buttonFunction: () => {},
        },
        {
          buttonName: "This Week",
          buttonFunction: () => {},
        },
        {
          buttonName: "This Month",
          buttonFunction: () => {},
        },
      ],
      children: <TrendingCardBody />,
      footer: <TrendingCardFooter />,
    },
  ];
  // const sideContent = [
  //   {
  //     title: "Top 10",
  //     headerIcons: {
  //       iconImg: faTrophy,
  //       label: "Top 10",
  //       iconMethod: () => {},
  //     },
  //   },
  // ];
  return (
    <div className={style.homePageContainer}>
      <div className={style.mainContentContainer}>
        {mainContent.map((item) => {
          return (
            <MainCard
              title={item.title}
              headerIcons={item.headerIcons}
              headerButtons={item.headerButtons}
              key={item.title}
              children={item.children}
              footer={item.footer}
            />
          );
        })}
      </div>
      <div className={style.sideContentContainer}></div>
    </div>
  );
}
export default HomePage;
