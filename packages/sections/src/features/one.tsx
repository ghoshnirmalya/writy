import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const FeaturesLayoutOne = () => {
  return (
    <Box as="section" borderBottomWidth={1} p={24}>
      <VStack spacing={24} align="center">
        <Heading>
          Unsplash is internet’s source of freely usable images.
        </Heading>
        <HStack spacing={24}>
          <VStack spacing={4} align="left">
            <Image
              src="https://unsplash-assets.imgix.net/marketing/misc/img01.jpg?auto=format&fit=crop&q=60"
              alt="Over one million curated photos"
              rounded="lg"
            />
            <Text fontWeight="bold" fontSize="lg">
              Over one million curated photos
            </Text>
            <Text>
              We hand-select every photo and accept only the best, so that no
              matter what you need—you’ll find exactly what you’re looking for
              on Unsplash.
            </Text>
          </VStack>
          <VStack spacing={4} align="left">
            <Image
              src="https://unsplash-assets.imgix.net/marketing/misc/img02.jpg?auto=format&fit=crop&q=60"
              alt="Over one million curated photos"
              rounded="lg"
            />
            <Text fontWeight="bold" fontSize="lg">
              A community of 211,166 photographers
            </Text>
            <Text>
              Unsplash is home to a growing community of photographers—from
              hobbyists, professionals, emerging brands and everyone in between.
            </Text>
          </VStack>
          <VStack spacing={4} align="left">
            <Image
              src="https://unsplash-assets.imgix.net/marketing/misc/img03.jpg?auto=format&fit=crop&q=60"
              alt="Over one million curated photos"
              rounded="lg"
            />
            <Text fontWeight="bold" fontSize="lg">
              Fuelling your favourite platforms
            </Text>
            <Text>
              With partners like BuzzFeed, Squarespace and Trello being powered
              by our API, the Unsplash library is more widely accessible than
              ever.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default FeaturesLayoutOne;
