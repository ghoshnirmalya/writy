import { Box, Flex } from "@chakra-ui/react";
import ContentArea from "components/layouts/content-area";
import LeftSidebar from "components/layouts/left-sidebar";
import RightSidebar from "components/layouts/right-sidebar";
import TopNavbar from "components/layouts/top-navbar";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getAsyncStateData } from "selectors/template";

const Layout: FC = () => {
  const { loading } = useSelector(getAsyncStateData());

  if (loading !== "fulfilled") {
    return <Box>Loading...</Box>;
  }

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
