import { Heading, Icon, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { MdWarning } from "react-icons/md";

const NotFoundErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Writy</title>
      </Head>
      <VStack spacing={4}>
        <Icon as={MdWarning} fontSize={80} />
        <Heading>Page not found</Heading>
      </VStack>
    </>
  );
};

export default NotFoundErrorPage;
