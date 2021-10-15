import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/Applayout";

const Home = () => (
  <AppLayout>
    <Head>
      <title>Nodebird</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
      />
    </Head>

    <Link href="/about">
      <a>about</a>
    </Link>
    <div>Hello, Next</div>
  </AppLayout>
);

export default Home;
