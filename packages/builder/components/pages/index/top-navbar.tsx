import {
  Button,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import generateAndDownloadCode from "lib/generate-and-download-code";
import React, { FC } from "react";
import {
  MdDesktopMac,
  MdFileDownload,
  MdLayersClear,
  MdPhoneIphone,
  MdTabletMac,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { setTemplateData, updatePreviewDeviceType } from "slices/template";

const TopNavbar: FC = () => {
  const dispatch = useDispatch();
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
        icon: <MdPhoneIphone />,
        label: "Mobile",
      },
      {
        key: "tablet",
        icon: <MdTabletMac />,
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
        {deviceButtonsNode()}
        <HStack spacing={4} align="center">
          <Button
            leftIcon={<MdLayersClear />}
            colorScheme="red"
            variant="outline"
            onClick={() => dispatch(setTemplateData(""))}
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
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
