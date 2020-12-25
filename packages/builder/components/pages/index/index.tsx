import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import RightSidebar from "components/layouts/right-sidebar";
import TopNavbar from "components/layouts/top-navbar";
import dynamic from "next/dynamic";
import React from "react";

const LazyContentArea = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyContentArea' */ "components/layouts/content-area"
    ),
  {
    ssr: false,
    loading: () => {
      const bgColor = useColorModeValue("gray.200", "gray.800");

      return (
        <Flex
          h="calc(100vh - 80px)"
          w="calc(100vw - 500px)"
          bg={bgColor}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="20" fontWeight="bold">
            Loading...
          </Text>
        </Flex>
      );
    },
  }
);

const IndexPageComponent = () => {
  return (
    <Flex overflow="hidden" flexDir="column">
      <Box>
        <TopNavbar />
      </Box>
      <Flex>
        <LazyContentArea />
        <RightSidebar />
      </Flex>
    </Flex>
  );
};

export default IndexPageComponent;
