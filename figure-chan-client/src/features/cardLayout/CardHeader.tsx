import { Card } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import layout from "../../styles/layout.module.scss";
import type { CardHeaderProp } from "../model";

function CardHeader({ headerTitle, headerIcon }: CardHeaderProp) {
  return (
    <Card.Header
      className={layout.cardHeader}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <FontAwesomeIcon
        icon={headerIcon}
        color="white"
        className={layout.cardIcon}
      />
      <span>{headerTitle}</span>
    </Card.Header>
  );
}
export default CardHeader;
