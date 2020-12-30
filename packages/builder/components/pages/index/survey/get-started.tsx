import {
  Button,
  Flex,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import darkModeSiteData from "data/site/dark";
import lightModeSiteData from "data/site/light";
import React, { FC } from "react";
import { MdArrowForward } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSiteData } from "slices/site";

const GetStarted: FC = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue("brand.100", "brand.900");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mapTemplateIdToData = (templateId: string) => {
    switch (templateId) {
      case "dark":
        return darkModeSiteData;

      case "light":
        return lightModeSiteData;

      default:
        return lightModeSiteData;
    }
  };

  const handleSiteTemplateSelection = (templateId: string) => {
    const siteData = mapTemplateIdToData(templateId);

    dispatch(setSiteData(siteData));
  };

  const templateNode = () => {
    const templates = [
      {
        id: "dark",
        label: "Dark",
        bgColor: "gray.900",
        color: "white",
      },
      {
        id: "light",
        label: "Light",
        bgColor: "gray.100",
        color: "black",
      },
    ];

    return templates.map((template) => {
      return (
        <Flex
          key={template.id}
          as="button"
          onClick={() => handleSiteTemplateSelection(template.id)}
          justifyContent="center"
          alignItems="center"
          bg={template.bgColor}
          color={template.color}
          borderWidth={1}
          rounded="lg"
          p={8}
          fontWeight="bold"
          _hover={{
            shadow: "lg",
          }}
        >
          <Text>{template.label}</Text>
        </Flex>
      );
    });
  };

  const modalNode = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg={bgColor}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems="flex-start">
              <Heading
                fontSize="4xl"
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                bgClip="text"
              >
                Get started
              </Heading>
              <Text>Click to select your preferred template to continue.</Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={8} w="100%" py={8}>
                {templateNode()}
              </Grid>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        width="250px"
        p={8}
        fontSize={24}
        rightIcon={<MdArrowForward />}
      >
        Get started
      </Button>
      {modalNode()}
    </>
  );
};

export default GetStarted;
