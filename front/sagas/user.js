import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

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

export default function* userSaga() {
  yield all([]);
}
