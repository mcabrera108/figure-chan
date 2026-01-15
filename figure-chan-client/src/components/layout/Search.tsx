import { Button, Group, Input } from "@chakra-ui/react";
import style from "../../styles/layout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={style.searchContainer}>
      <Group attached w="full">
        <Input
          flex={"1"}
          placeholder="Search..."
          className={style.searchInput}
          value={String(searchInput)}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          name="search"
          variant={"subtle"}
          _placeholder={{ color: "rgb(110, 110, 110)" }}
        />
        <Button className={style.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
        </Button>
      </Group>
    </div>
  );
}
export default Search;
