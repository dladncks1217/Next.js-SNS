import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {
  // 서버에 요청을 보냄.
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      // put은 dispatch와 동일. ( 성공 시 LOG_IN_SUCCESS )
      type: LOG_IN_SUCCESS,
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
  yield takeLatest(LOG_IN, login); // LOG_IN action이 들어오면 login함수를 호출.
}

function* helloSaga() {
  console.log("before");
  while (true) {
    yield take(HELLO_SAGA); // take : 해당 action dispatch되면 제너레이터를 next()하는 이펙트임.
    // take안에 next()가 들어있음. 중단점만 적절하게 써주자.
    console.log("hello saga");
  }
  console.log("hello saga");
  // 비동기 요청, 타이머 넣기도 가능
}

export default function* userSaga() {
  yield helloSaga();
}
