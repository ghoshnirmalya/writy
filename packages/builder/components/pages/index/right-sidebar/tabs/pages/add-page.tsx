import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  FormControl,
  HStack,
  FormHelperText,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import unoTemplateData from "data/templates/uno";
import React, { ChangeEvent, FC, useRef, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getSiteData } from "selectors/site";
import { addPage, setCurrentPageId, setTemplateData } from "slices/site";

const AddPage: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const urlField = useRef();
  const [url, setURL] = useState("");
  const { pages, theme } = useSelector(getSiteData());
  const bgColor = useColorModeValue("brand.100", "brand.900");

  const handlePageAddition = () => {
    dispatch(
      addPage({
        meta: {
          id: url,
        },
      })
    );

    dispatch(
      setTemplateData({
        currentPageId: pages.length,
        templateData: unoTemplateData(theme.mode),
      })
    );

    dispatch(setCurrentPageId(pages.length));

    setURL("");

    onClose();
  };

  const drawerNode = () => {
    return (
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        initialFocusRef={urlField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent bg={bgColor}>
            <DrawerCloseButton />
            <DrawerHeader
              borderBottomWidth="1px"
              fontSize="md"
              fontWeight="bold"
            >
              Create a new page
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={8}>
                <Alert status="info" rounded="lg">
                  <AlertIcon />
                  Click on the "Add" button below the form to add a new page.
                </Alert>
                <FormControl>
                  <FormLabel htmlFor="url">URL</FormLabel>
                  <InputGroup size="sm">
                    <Input
                      rounded="lg"
                      ref={urlField}
                      type="url"
                      id="url"
                      placeholder="contact"
                      value={url}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setURL(e.currentTarget.value)
                      }
                    />
                    <InputRightAddon rounded="lg">.html</InputRightAddon>
                  </InputGroup>
                  <FormHelperText>
                    Enter the url of HTML page in lowercase and hyphenated (eg:
                    "contact-us" or "about")
                  </FormHelperText>
                </FormControl>
              </Stack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <HStack spacing={4}>
                <Button size="sm" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  colorScheme="blue"
                  onClick={handlePageAddition}
                >
                  Add
                </Button>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  };

  return (
    <>
      <Button
        size="sm"
        leftIcon={<MdAddBox />}
        colorScheme="blue"
        onClick={onOpen}
      >
        Add page
      </Button>
      {drawerNode()}
    </>
  );
};

export default AddPage;
