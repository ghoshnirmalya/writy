import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import LeftSidebar from "components/layouts/left-sidebar";
import RightSidebar from "components/layouts/right-sidebar";
import TopNavbar from "components/layouts/top-navbar";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getAsyncStateData } from "selectors/template";
import dynamic from "next/dynamic";
import { MdHttp } from "react-icons/md";

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
        <LazyContentArea />
        <RightSidebar />
      </Flex>
    </Flex>
  );
};

export default Layout;
