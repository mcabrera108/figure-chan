import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IconButtonProps {
  iconImg: IconDefinition;
  iconClass?: string;
  btnFunction?: () => void;
}
function IconButton(props: IconButtonProps) {
  return (
    <div className={props.iconClass} onClick={props.btnFunction}>
      <FontAwesomeIcon icon={props.iconImg} color="white" />
    </div>
  );
}
export default IconButton;
