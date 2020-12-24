import { Box, Flex } from "@chakra-ui/react";
import ContentArea from "components/layouts/content-area";
import LeftSidebar from "components/layouts/left-sidebar";
import RightSidebar from "components/layouts/right-sidebar";
import TopNavbar from "components/layouts/top-navbar";
import React, { FC } from "react";

const Layout: FC = () => {
  return (
    <Flex overflow="hidden" flexDir="column">
      <Box>
        <TopNavbar />
      </Box>
      <Flex>
        <LeftSidebar />
        <ContentArea />
        <RightSidebar />
      </Flex>
    </Flex>
  );
};

export default Layout;
