import Page from "components/pages/index";
import initialUnoTemplateData from "data/templates/uno";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { setTemplateData } from "slices/template";
import { wrapper } from "../store";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Page />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(setTemplateData(initialUnoTemplateData));

    return {
      props: {},
    };
  }
);

export default IndexPage;
