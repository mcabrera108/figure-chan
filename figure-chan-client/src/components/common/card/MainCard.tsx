import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import style from "../../../styles/layout.module.scss";
import { Button, Card } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "../../../features/ui/tooltip";
import React from "react";
interface MainCardProps {
  title: string;
  headerIcons?: null | Icon;
  headerButtons?: null | CardHeaderButtonProp[];
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
interface CardHeaderButtonProp {
  buttonName: string | IconProp;
  buttonFunction?: () => void;
}
interface Icon {
  label?: string;
  iconImg: IconProp;
  iconMethod?: () => void;
}
function MainCard(props: MainCardProps) {
  return (
    <Card.Root className={style.cardContainer}>
      <Card.Header className={style.cardHeader}>
        <div className={style.iconContainer}>
          <Tooltip content={props.headerIcons?.label}>
            {props.headerIcons?.iconImg ? (
              <FontAwesomeIcon
                icon={props.headerIcons.iconImg}
                color="white"
                size="sm"
                className={style.cardIcon}
              />
            ) : (
              <></>
            )}
          </Tooltip>
          <h2 className={style.headerTitle}>{props.title}</h2>
        </div>

        <div className={style.buttonContainer}>
          <ul className={style.cardHeaderIconContainer}>
            {props.headerButtons?.map((item, index) => {
              return (
                <li className={style.cardButtonItem} key={index}>
                  <Button
                    className={style.cardButton}
                    onClick={item.buttonFunction}
                  >
                    {typeof item.buttonName === typeof "" ? (
                      <>{item.buttonName}</>
                    ) : (
                      <FontAwesomeIcon
                        icon={item.buttonName as IconProp}
                        color="white"
                        size="xs"
                        className={style.cardIcon}
                      />
                    )}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <React.Fragment>{props.children}</React.Fragment>
      </Card.Body>
      <Card.Footer>
        <React.Fragment>{props.footer}</React.Fragment>
      </Card.Footer>
    </Card.Root>
  );
}
export default MainCard;
