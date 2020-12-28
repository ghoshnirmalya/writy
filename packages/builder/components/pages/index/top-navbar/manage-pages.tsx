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
import React, { ChangeEvent, FC } from "react";
import { MdSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getSiteData } from "selectors/site";
import { updatePageMeta } from "slices/site";

const ManagePages: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pages } = useSelector(getSiteData());
  const bgColor = useColorModeValue("white", "black");

  const handleUpdation = (value: string, pageId: number) => {
    dispatch(
      updatePageMeta({
        pageId,
        key: "id",
        value,
      })
    );
  };

  const drawerNode = () => {
    return (
      <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={bgColor}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Manage pages</DrawerHeader>
            <DrawerBody>
              <Stack spacing={8}>
                {pages.map((page: any, index: number) => {
                  return (
                    <Box key={index}>
                      <FormLabel htmlFor="url">Page {index + 1} URL</FormLabel>
                      <InputGroup>
                        <Input
                          type="url"
                          id="url"
                          placeholder="URL"
                          value={page.meta.id}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleUpdation(e.currentTarget.value, index)
                          }
                        />
                        <InputRightAddon>.html</InputRightAddon>
                      </InputGroup>
                    </Box>
                  );
                })}
              </Stack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <HStack spacing={4}>
                <Button variant="outline" onClick={onClose}>
                  Close
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
      <Button leftIcon={<MdSettings />} onClick={onOpen}>
        Manage pages
      </Button>
      {drawerNode()}
    </>
  );
};

export default ManagePages;
