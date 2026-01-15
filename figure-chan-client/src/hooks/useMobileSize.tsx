import { useMediaQuery } from "@chakra-ui/react";

export default function useMobileSize() {
  const [isMobile] = useMediaQuery(["(max-width: 920px)"]);

  return isMobile;
}
