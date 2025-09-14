import { Link } from "react-router";
import style from "../../styles/layout.module.scss";
function Navigation() {
  return (
    <div className={style.navContainer}>
      <nav>
        <ul>
          <li>
            <Link to={"/search"}>Database</Link>
          </li>
          {/* <li>Community</li>
          <li>News</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Help</li> */}
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
