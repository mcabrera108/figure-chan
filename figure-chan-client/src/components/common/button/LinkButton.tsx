import { Button, type ConditionalValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  url: string;
  btnVariant?: ConditionalValue<
    "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain" | undefined
  >;
  classStr: string;
  btnName: string;
}
function LinkButton(props: LinkButtonProps) {
  return (
    <Link to={props.url}>
      <Button variant={props.btnVariant || "subtle"} className={props.classStr}>
        {props.btnName}
      </Button>
    </Link>
  );
}
export default LinkButton;
