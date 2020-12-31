import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import RightSidebar from "components/pages/index/right-sidebar";
import Survey from "components/pages/index/survey";
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
      const bgColor = useColorModeValue("brand.100", "brand.900");

      return (
        <Flex
          h="calc(100vh - 50px)"
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

const LazyRightSidebar = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyRightSidebar' */ "components/pages/index/right-sidebar"
    ),
  {
    ssr: false,
    loading: () => {
      return (
        <Flex h={100} alignItems="center" justifyContent="center">
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
    <Flex flexDir="column">
      <Flex>
        <LazyContentArea />
        <LazyRightSidebar />
      </Flex>
    </Flex>
  );
};

export default IndexPageComponent;
