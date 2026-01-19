import { Link } from "react-router-dom";

function SubMenuItem(props: {
  navMenuItemName: string;
  navMenuItemUrl: string;
}) {
  return <Link to={props.navMenuItemUrl}>{props.navMenuItemName}</Link>;
}
export default SubMenuItem;
