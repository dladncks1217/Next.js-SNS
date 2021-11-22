import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import AppLayout from "../components/Applayout";
import { applyMiddleware, createStore, compose } from "redux";
import reducer from "../reducers";
import sagaMiddleware from "../sagas/middlewares";
import rootSaga from "../sagas";

const NodeBird = ({ Component }) => {
  // nodebird에 store를 넣어줄 부분이 없어서 이걸 next-redux-wrapper를 사용하는 것이다.
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
  store: PropTypes.object,
};

// middleware 만드는법
// (store)=>(next)=>(action)=>{ //~~~ 여기에 작업들 ~~  next(action);} 와 같이 만듬(currying이라고 함.) (3단 currying으로 만들음.)
// (next가 디스패치임)
// withRedux가 nodebird의 props로 store를 연결해줌.
export default withRedux((initialState, options) => {
  // reducer action이 dispatch될 때 state를 어떻게 정의해야할지 정해둔게 reducer였음 여기서 state와 reducer가 합쳐진게 아래 store라고 보면 됨.
  const middlewares = [sagaMiddleware]; // 이부분만 계속 바뀐다고 보면 될듯.
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) // 실제 서비스 시. (배포시에는 devtools사용 안함.)
      : compose(
          // 액션과 리듀서 사이라 미들웨어
          applyMiddleware(...middlewares),
          typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" // redux devtools 사이트에서 가져옴
            ? window.__REDUX_DEVTOOLS_EXTENSION__() // redux devtools 깔면 window객체에 __REDUX... 하는 함수 생김( 그거 쓰는거임 )
            : // 이거 실제 배포시에는 뺌.
              (f) => f // 기본 미들웨어에 __REDUX__DEVTOOLS~~하는거 추가로 해서 합성하겠다는 의미(그냥 외우자.)
        );
  const store = createStore(reducer, initialState, enhancer);
  // 여기에 store 커스터마이징
  sagaMiddleware.run(rootSaga);
  return store;
})(NodeBird); // 이런걸 고차 컴포넌트라고 부름. 컴포넌트의 기능 확장.

/* 
_document.js     ->    html, head, body
app.js           ->    root
pages            ->    실제 컴포넌트
_error.js        ->    에러 발생 시.(이게 화면이 됨.) -> 배포 전까지 커스터마이징 굳이..?(충분히 잘 나와있음.)
*/

// 하이오더컴포넌트
// hoc(Component) 같은 컴포넌트
/*
const hoc = (Component) => () =>{
  return(
    <Component hello ="나는하이오더컴포넌트"/>
  )
}
*/
// 기존 컴포넌트에 새로운 prop들을 넣어 다른 동작을 하게하거나, console.log써서 기록용으로도 사용 가능
// connect(mapStateToProps)(Component) 이런애들은 4단구조가 된다고 생각하면 됨.

// 결론 : 컴포넌트들을 덮어씌워 기존 기능들을 강화하는 용도로 사용. ex) props 추가
// 얘는 hooks로 대체 가능하지만 withRedux같은것들은 이렇게 씀.
