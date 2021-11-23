import {
  all,
  fork,
  takeLatest,
  takeEvery,
  call,
  put,
  take,
  delay,
} from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {
  // 서버에 요청을 보냄.
}

function* login() {
  try {
    yield delay(100);
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
  // 어지간해선 while true로 감싼다.(같은 사용자의 두 계정으로 접속할 수 있기에.) 그게 아니면 takeEvery, takeLates사용한다.
  while (true) {
    yield take(LOG_IN); // LOG_IN action이 들어오면 login함수를 호출.
    // put은 saga의 dispatch
    yield put({
      type: LOG_IN_SUCCESS,
    });
  }
}

function* watchSignUp() {}

function* watchHello() {
  // 얘가 while true임.

  yield takeLatest(HELLO_SAGA, function* () {
    yield delay(1000);
    yield put({
      type: "BYE_SAGA",
    });
  });
}

// function* watchHello() {
//   yield take(HELLO_SAGA);
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log(5);
// }

export default function* userSaga() {
  yield all([watchLogin(), watchSignUp(), watchHello()]);
}

// saga 사용하며 반복문 사용해 몇번까지만 해서 제약을 걸면 제너레이터함수는 동작을 안하겠지만 reducer는 동작함.
// saga에서 take를 eventListener라고 봐도 될듯
// take : 해당 action dispatch되면 제너레이터를 next()하는 이펙트임.
// take안에 next()가 들어있음. 중단점만 적절하게 써주자.
// 비동기 요청, 타이머 넣기도 가능
// takeLatest => 마지막 하나만 인정하고싶다할때 사용 (action을 여러번 동시에 실행하면 마지막 요청만 실행하도록 하는 것.)
// thunk로 하면 이런거 구현하기가 힘들음.
