import { Box, Button, HStack, useColorModeValue } from "@chakra-ui/react";
import Tabs from "components/pages/index/right-sidebar/tabs";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const LazyDownloadHTMLButton = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyDownloadHTMLButton' */ "components/pages/index/right-sidebar/download-html-button"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button size="sm" isLoading />;
    },
  }
);

const LazyDeviceButtons = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyDeviceButtons' */ "components/pages/index/right-sidebar/device-buttons"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button size="sm" isLoading />;
    },
  }
);

const RightSidebar: FC = () => {
  const bgColor = useColorModeValue("brand.100", "brand.900");

  return (
    <Box w="500px" bg={bgColor} borderLeftWidth={1} overflowY="hidden">
      <HStack
        spacing={4}
        align="center"
        borderBottomWidth={1}
        p={4}
        justifyContent="space-between"
      >
        <LazyDeviceButtons />
        <LazyDownloadHTMLButton />
      </HStack>
      <Tabs />
    </Box>
  );
};

export default RightSidebar;
