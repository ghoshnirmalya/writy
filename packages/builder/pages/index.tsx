import Page from "components/pages/index";
import pageData from "data/layout.json";
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
    store.dispatch(setTemplateData(pageData));

    return {
      props: {},
    };
  }
);

export default IndexPage;
