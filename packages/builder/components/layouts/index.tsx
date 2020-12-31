import { Flex, useColorModeValue } from "@chakra-ui/react";
import TopNavbar from "components/layouts/top-navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const bgColor = useColorModeValue("brand.100", "brand.900");
  const color = useColorModeValue("brand.900", "brand.100");

  return (
    <>
      <TopNavbar />
      <Flex
        h="calc(100vh - 50px)"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        bg={bgColor}
        color={color}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
