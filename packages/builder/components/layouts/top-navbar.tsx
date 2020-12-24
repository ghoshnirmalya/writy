import { Button, Flex, HStack, IconButton, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  MdSave,
  MdNotifications,
  MdLayersClear,
  MdBugReport,
} from "react-icons/md";

const TopNavbar: FC = () => {
  return (
    <Flex h="80px" borderBottomWidth={1} px={4} alignItems="center">
      <Flex justifyContent="space-between" w="100%">
        <HStack spacing={4} align="center">
          <Link>Writy</Link>
        </HStack>
        <HStack spacing={4} align="center">
          <Button
            leftIcon={<MdLayersClear />}
            colorScheme="red"
            variant="outline"
          >
            Reset
          </Button>
          <Button leftIcon={<MdSave />} colorScheme="teal">
            Save
          </Button>
          <IconButton
            aria-label="Notifications"
            icon={<MdNotifications size={24} />}
          />
          <IconButton
            aria-label="Report bug"
            icon={<MdBugReport size={24} />}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
