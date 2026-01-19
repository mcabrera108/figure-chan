import style from "../../styles/layout.module.scss";
import { Link } from "react-router-dom";
import SubMenuItem from "./SubMenuItem";
import { useState } from "react";
interface NavItemProps {
  navMenuUrl: string;
  navMenuName: string;
  navMenuItems: {
    navMenuItemName: string;
    navMenuItemUrl: string;
  }[];
}
function NavItem({ navMenuUrl, navMenuName, navMenuItems }: NavItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseLeave={() => {
        setIsVisible(false);
      }}
      onMouseEnter={() => {
        setIsVisible(true);
      }}
    >
      <li>
        <Link to={navMenuUrl}>{navMenuName}</Link>
      </li>
      {isVisible ? (
        <div className={style.navSubMenu}>
          {navMenuItems.map((item) => {
            return (
              <SubMenuItem
                navMenuItemName={item.navMenuItemName}
                navMenuItemUrl={item.navMenuItemUrl}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default NavItem;
