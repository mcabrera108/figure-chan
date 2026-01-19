import style from "../../styles/layout.module.scss";
import NavItem from "./NavItem";
const navMenuOptions = [
  {
    navMenuName: "Database",
    navMenuItems: [
      {
        navMenuItemName: "Search",
        navMenuItemUrl: "/search",
      },
      {
        navMenuItemName: "Recent Submissions",
        navMenuItemUrl: "/search",
      },
    ],
    navMenuUrl: "/search",
  },
  // {
  //   navMenuName: "Database",
  //   navMenuItems: [
  //     {
  //       navMenuItemName: "Search",
  //       navMenuItemUrl: "/search",
  //     },
  //     {
  //       navMenuItemName: "Search",
  //       navMenuItemUrl: "/search",
  //     },
  //   ],
  //   navMenuUrl: "/search",
  // },
];
function Navigation() {
  return (
    <div className={style.navContainer}>
      <nav>
        <ul>
          {navMenuOptions.map((item, index) => {
            return (
              <NavItem
                navMenuUrl={item.navMenuUrl}
                navMenuName={item.navMenuName}
                navMenuItems={item.navMenuItems}
                key={index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
