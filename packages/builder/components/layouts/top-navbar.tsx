import {
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FC } from "react";
import {
  MdBugReport,
  MdLayersClear,
  MdNotifications,
  MdSave,
  MdWbIncandescent,
  MdWbSunny,
} from "react-icons/md";

const TopNavbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "black");

  return (
    <Flex
      h="80px"
      borderBottomWidth={1}
      px={4}
      alignItems="center"
      bg={bgColor}
    >
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
          <IconButton
            aria-label="Report bug"
            icon={
              colorMode === "light" ? (
                <MdWbIncandescent size={24} />
              ) : (
                <MdWbSunny size={24} />
              )
            }
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
