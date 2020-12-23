import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const IndexPageComponent = () => {
  return (
    <Stack>
      <Flex justifyContent="center" alignItems="center">
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">Writy</Heading>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
