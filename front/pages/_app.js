import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import AppLayout from "../components/Applayout";
import { createStore } from "redux";
import { Provider } from "react-redux"; // 이 provider는 컴포넌트임.
import reducer from "../reducers";

const NodeBird = ({ Component, store }) => {
  // nodebird에 store를 넣어줄 부분이 없어서 이걸 next-redux-wrapper를 사용하는 것이다.
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

NodeBird.propTypes = {
  // ts하는게 아니라 prop-types로 검증해주면 좋을듯. (적은 비용으로 안정성을 더함)
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  // reducer action이 dispatch될 때 state를 어떻게 정의해야할지 정해둔게 reducer였음 여기서 state와 reducer가 합쳐진게 아래 store라고 보면 됨.
  const store = createStore(reducer, initialState);
  // 여기에 store 커스터마이징
  return store;
})(NodeBird); // 이런걸 고차 컴포넌트라고 부름. 컴포넌트의 기능 확장.

/* 
_document.js     ->    html, head, body
app.js           ->    root
pages            ->    실제 컴포넌트
_error.js        ->    에러 발생 시.(이게 화면이 됨.) -> 배포 전까지 커스터마이징 굳이..?(충분히 잘 나와있음.)
*/
