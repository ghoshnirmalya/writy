import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const ContentArea: FC = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      h="100vh"
      w="calc(100vw - 100px - 200px)"
      bg={bgColor}
      p={4}
      overflowY="auto"
    >
      <Box borderWidth={1}>
        <Box bg="white">
          <Box as="section" borderBottomWidth={1} p={4}>
            <HStack spacing={16} justifyContent="space-between">
              <Box>
                <Link>Home</Link>
              </Box>
              <HStack spacing={8}>
                <Link>About</Link>
                <Link>History</Link>
                <Link>Join the team</Link>
                <Link>Press</Link>
              </HStack>
            </HStack>
          </Box>
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
                    We hand-select every photo and accept only the best, so that
                    no matter what you need—you’ll find exactly what you’re
                    looking for on Unsplash.
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
                    Unsplash is home to a growing community of
                    photographers—from hobbyists, professionals, emerging brands
                    and everyone in between.
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
                    With partners like BuzzFeed, Squarespace and Trello being
                    powered by our API, the Unsplash library is more widely
                    accessible than ever.
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentArea;
