import { Flex } from "@chakra-ui/react";
import ContentArea from "components/layouts/content-area";
import LeftSidebar from "components/layouts/left-sidebar";
import RightSidebar from "components/layouts/right-sidebar";
import React, { FC } from "react";

const Layout: FC = () => {
  return (
    <Flex overflow="hidden">
      <LeftSidebar />
      <ContentArea />
      <RightSidebar />
    </Flex>
  );
};

export default Layout;
