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
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, FC } from "react";
import { MdDelete, MdSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getSiteData } from "selectors/site";
import { removePage, updatePageMeta } from "slices/site";

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

  const handleDeletion = (pageId: number) => {
    dispatch(removePage(pageId));
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
                      <HStack spacing={4} key={index} alignItems="flex-end">
                        <FormControl>
                          <FormLabel htmlFor="url">
                            Page {index + 1} URL
                          </FormLabel>
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
                        </FormControl>
                        <IconButton
                          aria-label="Delete"
                          icon={<MdDelete />}
                          colorScheme="red"
                          variant="outline"
                          onClick={() => handleDeletion(index)}
                        />
                      </HStack>
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
