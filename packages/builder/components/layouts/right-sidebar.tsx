import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const RightSidebar: FC = () => {
  return (
    <Box h="calc(100vh - 80px)" w="400px" borderLeftWidth={1} p={4}>
      Right Sidebar
    </Box>
  );
};

export default RightSidebar;
