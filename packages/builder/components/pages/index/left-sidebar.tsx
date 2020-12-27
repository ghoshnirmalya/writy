import { Flex, IconButton, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdDesktopMac, MdHelp, MdPhoneAndroid } from "react-icons/md";

const LeftSidebar: FC = () => {
  const bgColor = useColorModeValue("white", "black");

  return (
    <Flex
      h="calc(100vh - 80px - 80px)"
      w="80px"
      borderRightWidth={1}
      py={4}
      justifyContent="center"
      bg={bgColor}
    >
      <VStack spacing={8} align="center">
        <IconButton aria-label="Devices" icon={<MdDesktopMac size={24} />} />
        <IconButton aria-label="Devices" icon={<MdPhoneAndroid size={24} />} />
        <IconButton aria-label="Help" icon={<MdHelp size={24} />} />
      </VStack>
    </Flex>
  );
};

export default LeftSidebar;
