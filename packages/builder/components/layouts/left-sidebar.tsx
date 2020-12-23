import { Box, IconButton, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdSettings } from "react-icons/md";

const LeftSidebar: FC = () => {
  return (
    <Box h="100vh" w="100px" borderRightWidth={1} py={4}>
      <VStack spacing={4} align="center">
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
      </VStack>
    </Box>
  );
};

export default LeftSidebar;
