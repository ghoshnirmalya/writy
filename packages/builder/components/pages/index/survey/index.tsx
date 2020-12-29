import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import rainbowTemplateData from "data/templates/rainbow";
import unoTemplateData from "data/templates/uno";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addPage, setTemplateData } from "slices/site";

const Survey: FC = () => {
  const dispatch = useDispatch();
  const bgColor = useColorModeValue("brand.100", "brand.900");

  const mapTemplateIdToData = (templateId: string) => {
    switch (templateId) {
      case "uno":
        return unoTemplateData;

      case "rainbow":
        return rainbowTemplateData;

      default:
        return unoTemplateData;
    }
  };

  const handleTemplateSelection = (templateId: string) => {
    const templateData = mapTemplateIdToData(templateId);

    ["index", "about", "contact"].map((page: string, index: number) => {
      dispatch(
        addPage({
          meta: {
            id: page,
          },
        })
      );

      dispatch(setTemplateData({ currentPageId: index, templateData }));
    });
  };

  const templateNode = () => {
    const templates = [
      {
        id: "uno",
        label: "Uno",
        image: "/images/templates/uno.png",
      },
      {
        id: "rainbow",
        label: "Rainbow",
        image: "/images/templates/rainbow.png",
      },
    ];

    return templates.map((template) => {
      return (
        <Box
          key={template.id}
          as="button"
          onClick={() => handleTemplateSelection(template.id)}
          borderWidth={1}
          alignItems="center"
          bg={bgColor}
          rounded="lg"
          _hover={{
            shadow: "lg",
          }}
        >
          <Image src={template.image} alt={template.label} rounded="lg" />
          <Text p={4} borderTopWidth={1} fontWeight="bold">
            {template.label}
          </Text>
        </Box>
      );
    });
  };

  return (
    <Container maxW="4xl">
      <VStack spacing={4}>
        <Heading fontSize="3xl">Get started</Heading>
        <Text>Click to select your preferred template and continue</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={8} w="100%" p={8}>
          {templateNode()}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Survey;
