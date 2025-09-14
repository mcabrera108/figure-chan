import style from "../../styles/layout.module.scss";
import Navigation from "./Navigation";
import { Group, Input, Button, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.logo}>
          <Link to={"/"}>Figure-Chan</Link>
        </div>
        <div className={style.navSearchContainer}>
          <Group attached w="full">
            <Input
              flex={"1"}
              placeholder="Search"
              className={style.searchInput}
              variant={"subtle"}
              _placeholder={{ color: "rgb(110, 110, 110)" }}
            />
            <Button className={style.searchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
            </Button>
          </Group>
        </div>
        <div className={style.loginBtnContainer}>
          <HStack>
            <Button variant={"solid"} className={style.loginBtn}>
              Login
            </Button>
            <Button variant={"solid"} className={style.regBtn}>
              Register
            </Button>
          </HStack>
        </div>
      </header>
      <Navigation />
    </>
  );
}
export default Header;
