import { Button, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const LazyDownloadHTMLButton = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyDownloadHTMLButton' */ "components/pages/index/top-navbar/download-html-button"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button isLoading />;
    },
  }
);

const LazyPagesDropdown = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyPagesDropdown' */ "components/pages/index/top-navbar/pages-dropdown"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button isLoading />;
    },
  }
);

const LazyDeviceButtons = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyDeviceButtons' */ "components/pages/index/top-navbar/device-buttons"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button isLoading />;
    },
  }
);

const TopNavbar: FC = () => {
  const bgColor = useColorModeValue("white", "black");

  return (
    <Flex
      h="80px"
      borderBottomWidth={1}
      px={4}
      alignItems="center"
      bg={bgColor}
    >
      <Flex justifyContent="space-between" w="100%">
        <LazyPagesDropdown />
        <HStack spacing={4} align="center">
          <LazyDeviceButtons />
          <LazyDownloadHTMLButton />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
