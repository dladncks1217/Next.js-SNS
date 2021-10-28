import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import AppLayout from "../components/Applayout";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

NodeBird.propTypes = {
  // ts하는게 아니라 prop-types로 검증해주면 좋을듯. (적은 비용으로 안정성을 더함)
  Component: PropTypes.elementType,
};

export default NodeBird;

/* 
_document.js     ->    html, head, body
app.js           ->    root
pages            ->    실제 컴포넌트
_error.js        ->    에러 발생 시.(이게 화면이 됨.) -> 배포 전까지 커스터마이징 굳이..?(충분히 잘 나와있음.)
*/
