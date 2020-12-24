import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Tabs from "components/layouts/right-sidebar/tabs";
import React, { FC } from "react";

const RightSidebar: FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const editorControlsBgColor = useColorModeValue("white", "black");

  return (
    <Box
      h="calc(100vh - 80px)"
      w="600px"
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
