import axios from "axios";
import { all, fork, takeEvery, call, put, delay } from "redux-saga/effects";
import {
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
} from "../reducers/user";

axios.defaults.baseURL = "http://localhost:3065";

function loginAPI(loginData) {
  // 서버에 요청을 보냄.
  return axios.post("/user/login", loginData);
}

function* login(action) {
  try {
    // 요청 보내고 응답 다 받은 뒤 put 해야하기에, call 사용. (fork로 하면 서버 요청 후 값 안받고 put해버림.)
    const result = yield call(loginAPI, action.data);
    console.log(result);
    yield put({
      // put은 dispatch와 동일. ( 성공 시 LOG_IN_SUCCESS )
      type: LOG_IN_SUCCESS,
      data: result,
    });
  } catch (e) {
    console.error(e);
    // ( 성공 시 LOG_IN_FAILURE )
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  // 어지간해선 while true로 감싼다.(같은 사용자의 두 계정으로 접속할 수 있기에.) 그게 아니면 takeEvery, takeLates사용한다.
  yield takeEvery(LOG_IN_REQUEST, login);
}

function logoutAPI(logoutData) {
  return axios.post("/user/logout", logoutData);
}

function* logout(action) {
  try {
    const result = yield call(logoutAPI, action.data);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}

function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

function* signUpAPI(signUpData) {
  console.log(signUpData);
  return axios.post("/user", signUpData);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp), fork(watchLogout)]);
}
// call과 Forks는 기본적으로 함수 실행.
// call은 동기 호출, fork는 비동기 호출

// saga 사용하며 반복문 사용해 몇번까지만 해서 제약을 걸면 제너레이터함수는 동작을 안하겠지만 reducer는 동작함.
// saga에서 take를 eventListener라고 봐도 될듯
// take : 해당 action dispatch되면 제너레이터를 next()하는 이펙트임.
// take안에 next()가 들어있음. 중단점만 적절하게 써주자.
// 비동기 요청, 타이머 넣기도 가능
// takeLatest => 마지막 하나만 인정하고싶다할때 사용 (action을 여러번 동시에 실행하면 마지막 요청만 실행하도록 하는 것.)
// thunk로 하면 이런거 구현하기가 힘들음.
