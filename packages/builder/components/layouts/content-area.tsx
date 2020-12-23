import { Box, useColorModeValue } from "@chakra-ui/react";
import FeaturesSection from "components/views/sections/features";
import HeroSection from "components/views/sections/hero";
import NavbarSection from "components/views/sections/navbar";
import pageData from "data/layout.json";
import React, { FC } from "react";

const ContentArea: FC = () => {
  const bgColor = useColorModeValue("gray.200", "gray.800");

  const mapSectionToSectionType = (section: any) => {
    switch (section.meta.type) {
      case "navbar":
        return <NavbarSection section={section} />;

      case "hero":
        return <HeroSection section={section} />;

      case "features":
        return <FeaturesSection section={section} />;

      default:
        break;
    }
  };

  return (
    <Box
      h="calc(100vh - 80px)"
      w="calc(100vw - 80px - 600px)"
      bg={bgColor}
      p={14}
      overflowY="auto"
    >
      <Box borderWidth={1} shadow="xl">
        <Box bg="white">
          {pageData.sections.map((section: any, index: number) => {
            return (
              <Box as="section" key={index}>
                {mapSectionToSectionType(section)}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ContentArea;
