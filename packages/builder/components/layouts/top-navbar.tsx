import { Flex, HStack, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdSettings } from "react-icons/md";

const TopNavbar: FC = () => {
  return (
    <Flex h="80px" borderBottomWidth={1} px={4} alignItems="center">
      <HStack spacing={4} align="center">
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
        <IconButton aria-label="Send email" icon={<MdSettings size={32} />} />
      </HStack>
    </Flex>
  );
};

export default TopNavbar;
