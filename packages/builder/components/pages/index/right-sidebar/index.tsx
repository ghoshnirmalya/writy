import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Tabs from "components/pages/index/right-sidebar/tabs";
import React, { FC } from "react";

const RightSidebar: FC = () => {
  const bgColor = useColorModeValue("brand.100", "brand.900");
  const editorControlsBgColor = useColorModeValue("brand.100", "brand.900");

  return (
    <Box
      h="calc(100vh - 50px - 50px)"
      w="500px"
      bg={bgColor}
      borderLeftWidth={1}
      overflowY="auto"
    >
      <Box borderBottomWidth={1} p={4} bg={editorControlsBgColor}>
        <Text fontWeight="bold">Editor</Text>
      </Box>
      <Tabs />
    </Box>
  );
};

export default RightSidebar;
