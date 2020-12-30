import {
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const LazyGetStarted = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyGetStarted' */ "components/pages/index/survey/get-started"
    ),
  {
    ssr: false,
    loading: () => {
      return (
        <Button
          size="sm"
          colorScheme="blue"
          width="250px"
          p={8}
          fontSize={24}
          isLoading
        />
      );
    },
  }
);

const Survey: FC = () => {
  return (
    <Container maxW="4xl" py={24}>
      <VStack spacing={16}>
        <VStack spacing={8} alignItems="flex-start">
          <Heading
            as="h1"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Writy
          </Heading>
          <Heading as="h2" fontSize="6xl" fontWeight="bold">
            Build good-looking websites without writing a single line of code.
          </Heading>
          <Text fontSize="2xl">
            Writy is an{" "}
            <Link
              href="https://github.com/ghoshnirmalya/writy"
              target="_blank"
              color="blue.500"
              rel="noopener"
            >
              Open Source
            </Link>{" "}
            website builder powered by Next.js, Chakra UI and TailwindCSS.
          </Text>
          <LazyGetStarted />
        </VStack>
      </VStack>
    </Container>
  );
};

export default Survey;
