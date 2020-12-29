import { Box, useColorModeValue } from "@chakra-ui/react";
import PreviewIframe from "components/pages/index/content-area/preview-iframe";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getPreviewDeviceTypeData } from "selectors/site";

const ContentArea: FC = () => {
  const previewDeviceTypeData = useSelector(getPreviewDeviceTypeData());
  const bgColor = useColorModeValue("brand.100", "brand.900");

  const determinePreviewWidth = () => {
    switch (previewDeviceTypeData) {
      case "desktop":
        return 1440;

      case "tablet":
        return 481;

      case "mobile":
        return 320;

      default:
        return 1024;
    }
  };

  return (
    <Box
      h="calc(100vh - 50px)"
      w="calc(100vw - 500px)"
      bg={bgColor}
      p={14}
      overflow="hidden"
    >
      <Box
        shadow="xl"
        bg={bgColor}
        h="calc(100vh - 50px - 120px)"
        overflowY="auto"
        maxW={determinePreviewWidth()}
        mx="auto"
      >
        <PreviewIframe />
      </Box>
    </Box>
  );
};

export default ContentArea;
