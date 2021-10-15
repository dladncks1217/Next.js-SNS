import React from "react";
import AppLayout from "../components/Applayout";
import Head from "next/head";

const Profile = () => (
  <>
    <Head>
      <title>Nodebird</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
      />
    </Head>
    <AppLayout>
      <div>내 프로필</div>
    </AppLayout>
  </>
);

export default Profile;
