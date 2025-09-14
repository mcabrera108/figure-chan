import { Card } from "@chakra-ui/react";
import layout from "../styles/layout.module.scss";

function QueryEntryPage() {
  return (
    <div className={layout.mainContainer}>
      <div className={layout.cardLayoutContainer}>
        <div className={layout.mainContent}>
          <Card.Root className={layout.cardContainer}></Card.Root>
        </div>
      </div>
    </div>
  );
}
export default QueryEntryPage;
