import { Flex, IconButton, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { MdDesktopMac, MdHelp, MdPhoneAndroid } from "react-icons/md";

const LeftSidebar: FC = () => {
  const bgColor = useColorModeValue("brand.100", "brand.900");

  return (
    <Flex
      h="calc(100vh - 50px)"
      w="50px"
      borderRightWidth={1}
      py={4}
      justifyContent="center"
      bg={bgColor}
    >
      <VStack spacing={8} align="center">
        <IconButton
          size="sm"
          aria-label="Devices"
          icon={<MdDesktopMac size={24} />}
        />
        <IconButton
          size="sm"
          aria-label="Devices"
          icon={<MdPhoneAndroid size={24} />}
        />
        <IconButton size="sm" aria-label="Help" icon={<MdHelp size={24} />} />
      </VStack>
    </Flex>
  );
};

export default LeftSidebar;
