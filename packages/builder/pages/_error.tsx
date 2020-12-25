import { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface IProps {
  statusCode: number;
}

const ErrorPage: NextPage<IProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </>
  );
};

export async function getServerSideProps({ res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return {
    props: { statusCode },
  };
}

export default ErrorPage;
