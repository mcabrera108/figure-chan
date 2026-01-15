import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobNavigation(props: { handleCollapse: () => void }) {
  return (
    <button onClick={props.handleCollapse}>
      <FontAwesomeIcon icon={faBars} color="white" />
    </button>
  );
}
export default MobNavigation;
