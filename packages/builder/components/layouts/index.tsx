import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Flex minH="100vh" w="100vw" justifyContent="center" alignItems="center">
      {children}
    </Flex>
  );
};

export default Layout;
