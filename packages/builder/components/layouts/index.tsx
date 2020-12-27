import { Flex } from "@chakra-ui/react";
import TopNavbar from "components/layouts/top-navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Flex
        minH="calc(100vh - 80px)"
        w="100vw"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
