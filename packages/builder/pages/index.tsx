import Page from "components/pages/index";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Writy</title>
      </Head>
      <Page />
    </>
  );
};

export default IndexPage;
