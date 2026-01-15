import style from "../../styles/layout.module.scss";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className={style.navContainer}>
      <nav>
        <ul>
          <li>
            <Link to={"/search"}>Database</Link>
          </li>
          {/* <li>
            <Link to={"/"}>Community</Link>
          </li>
          <li>
            <Link to={"/"}>News</Link>
          </li>
          <li>
            <Link to={"/"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/"}>Shop</Link>
          </li>
          <li>
            <Link to={"/"}>Help</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
