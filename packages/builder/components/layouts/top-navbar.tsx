import {
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import generateAndDownloadCode from "lib/generate-and-download-code";
import React, { FC } from "react";
import {
  MdBugReport,
  MdDesktopMac,
  MdFileDownload,
  MdLayersClear,
  MdPhone,
  MdTablet,
  MdWbIncandescent,
  MdWbSunny,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { updatePreviewDeviceType } from "slices/template";

const TopNavbar: FC = () => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "black");

  const handleDownloadCode = () => {
    const iframeContent: any = document.getElementById("js-preview-iframe");

    generateAndDownloadCode(
      iframeContent.contentWindow.document.documentElement.innerHTML
    );
  };

  const deviceButtonsNode = () => {
    const devices = [
      {
        key: "mobile",
        icon: <MdPhone />,
        label: "Mobile",
      },
      {
        key: "tablet",
        icon: <MdTablet />,
        label: "Tablet",
      },
      {
        key: "desktop",
        icon: <MdDesktopMac />,
        label: "Desktop",
      },
    ];

    return (
      <HStack spacing={4} align="center">
        {devices.map((device, index) => {
          return (
            <IconButton
              key={index}
              aria-label={device.label}
              icon={device.icon}
              onClick={() => dispatch(updatePreviewDeviceType(device.key))}
            />
          );
        })}
      </HStack>
    );
  };

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
        {deviceButtonsNode()}
        <HStack spacing={4} align="center">
          <Button
            leftIcon={<MdLayersClear />}
            colorScheme="red"
            variant="outline"
          >
            Reset template
          </Button>
          <Button
            leftIcon={<MdFileDownload />}
            colorScheme="blue"
            onClick={handleDownloadCode}
          >
            Download HTML file
          </Button>
          <IconButton
            aria-label="Report an issue"
            icon={<MdBugReport size={24} />}
            as="a"
            href="https://github.com/ghoshnirmalya/writy/issues/new"
            target="_blank"
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
