import { Link } from "react-router";
import layout from "../../styles/layout.module.scss";
import type { NavOptionList } from "../model";

function NavOpt({ navObj }: any) {
  return (
    <>
      <ul className={layout.navOpt}>
        {navObj.navOptions.map((obj: NavOptionList) => {
          return (
            <li key={obj.id}>
              <Link to={obj.navOptUrl}>{obj.navOptTitle}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default NavOpt;
