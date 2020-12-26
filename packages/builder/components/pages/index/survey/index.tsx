import { Text, Box, Grid, VStack, Heading } from "@chakra-ui/react";
import unoTemplateData from "data/templates/uno";
import rainbowTemplateData from "data/templates/rainbow";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setTemplateData } from "slices/template";
import Image from "next/image";

const Survey: FC = () => {
  const dispatch = useDispatch();

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

    dispatch(setTemplateData(templateData));
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
          _hover={{
            shadow: "lg",
          }}
        >
          <Image
            src={template.image}
            alt={template.label}
            width={459}
            height={440}
          />
          <Text p={4} borderTopWidth={1} fontWeight="bold">
            {template.label}
          </Text>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8}>
      <Heading>Select a template to continue</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8} w="100%" p={8}>
        {templateNode()}
      </Grid>
    </VStack>
  );
};

export default Survey;
