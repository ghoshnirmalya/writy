import { Box, useColorModeValue } from "@chakra-ui/react";
import PreviewIframe from "components/layouts/content-area/preview-iframe";
import React, { FC } from "react";

const ContentArea: FC = () => {
  const bgColor = useColorModeValue("gray.200", "gray.800");

  return (
    <Box h="calc(100vh - 80px)" w="calc(100vw - 500px)" bg={bgColor} p={14}>
      <Box shadow="xl">
        <Box
          bg={bgColor}
          h="calc(100vh - 80px - 120px)"
          overflowY="auto"
          id="js-page-content"
        >
          <PreviewIframe />
        </Box>
      </Box>
    </Box>
  );
};

export default ContentArea;
