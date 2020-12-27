import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import RightSidebar from "components/pages/index/right-sidebar";
import Survey from "components/pages/index/survey";
import TopNavbar from "components/pages/index/top-navbar";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getSiteData } from "selectors/site";

const LazyContentArea = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyContentArea' */ "components/pages/index/content-area"
    ),
  {
    ssr: false,
    loading: () => {
      const bgColor = useColorModeValue("gray.200", "gray.800");

      return (
        <Flex
          h="calc(100vh - 80px - 80px)"
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

const IndexPageComponent: FC = () => {
  const { pages } = useSelector(getSiteData());

  if (!pages.length) {
    return <Survey />;
  }

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
