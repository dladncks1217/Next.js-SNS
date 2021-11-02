// post와 user리듀서는 각각의 리듀서
// 이 각각의 리듀서를 묶어불 하나의 리듀서가 필요함. (root reducer)
// 그게 이 index리듀서, 하나로 묶어주는거 redux에서 제공함.

import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
