import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { html as beautifyHTML } from "js-beautify";
import fileDownload from "js-file-download";
import JSZip from "jszip";
import React, { FC } from "react";
import {
  MdArrowDropDown,
  MdDesktopMac,
  MdFileDownload,
  MdLayersClear,
  MdPhoneIphone,
  MdTabletMac,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSiteData } from "selectors/site";
import {
  setCurrentPageId,
  setTemplateData,
  updatePreviewDeviceType,
} from "slices/site";

const TopNavbar: FC = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue("white", "black");
  const { pages } = useSelector(getSiteData());
  const currentPageId = useSelector(getCurrentPageData());
  const zip = new JSZip();

  const handleDownloadCode = () => {
    const iframeContent: any = document.getElementById("js-preview-iframe");

    pages.map((page: any, index: number) => {
      dispatch(setCurrentPageId(index));

      zip.file(
        `${page.meta.id}.html`,
        beautifyHTML(`<html>
            ${iframeContent.contentWindow.document.documentElement.innerHTML}
          </html>
        `)
      );
    });

    zip
      .generateAsync({ type: "blob" })
      .then((blob) => fileDownload(blob, "project.zip"))
      .catch((e) => console.log(e));
  };

  const pagesDropdownNode = () => {
    return (
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<MdArrowDropDown />}>
          index.html
        </MenuButton>
        <MenuList>
          {pages.map((page, index: number) => {
            return <MenuItem key={index}>{page.meta.id}.html</MenuItem>;
          })}
        </MenuList>
      </Menu>
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
      <ButtonGroup>
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
      </ButtonGroup>
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
        {pagesDropdownNode()}
        <HStack spacing={4} align="center">
          {deviceButtonsNode()}
          <IconButton
            icon={<MdLayersClear />}
            colorScheme="red"
            variant="outline"
            onClick={() =>
              dispatch(setTemplateData({ currentPageId, templateData: "" }))
            }
            aria-label="Reset template"
          >
            Reset template
          </IconButton>
          <Button
            leftIcon={<MdFileDownload />}
            colorScheme="blue"
            onClick={handleDownloadCode}
          >
            Download HTML files
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopNavbar;
