import {
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
  HStack,
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
  const { pages } = useSelector(getSiteData());
  const bgColor = useColorModeValue("white", "black");

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
        templateData: unoTemplateData,
      })
    );

    dispatch(setCurrentPageId(pages.length));

    setURL("");

    onClose();
  };

  const drawerNode = () => {
    return (
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        initialFocusRef={urlField}
        onClose={onClose}
      >
        <DrawerOverlay>
          <DrawerContent bg={bgColor}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Create a new page
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={8}>
                <Box>
                  <FormLabel htmlFor="url">URL</FormLabel>
                  <InputGroup>
                    <Input
                      ref={urlField}
                      type="url"
                      id="url"
                      placeholder="contact"
                      value={url}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setURL(e.currentTarget.value)
                      }
                    />
                    <InputRightAddon>.html</InputRightAddon>
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <HStack spacing={4}>
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" onClick={handlePageAddition}>
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
      <Button leftIcon={<MdAddBox />} colorScheme="blue" onClick={onOpen}>
        Add page
      </Button>
      {drawerNode()}
    </>
  );
};

export default AddPage;
