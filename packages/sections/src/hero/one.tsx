import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HeroLayoutOne = () => {
  return (
    <Box as="section" borderBottomWidth={1} p={24}>
      <VStack spacing={4} align="stretch">
        <Heading>Photos for everyone</Heading>
        <Text>
          Over 2 million free high-resolution images brought to you by the
          world’s most generous community of photographers.
        </Text>
        <HStack spacing={4}>
          <Button colorScheme="blue">Start browsing</Button>
          <Button colorScheme="blue" variant="outline">
            Become a contributor
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroLayoutOne;
