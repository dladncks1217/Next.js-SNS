const dummyUser = {
  nickname: "임우찬",
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {},
};
export const initialState = {
  // 이 부분이 store, 여기 넣어준 값이 초기 state, 이게 react의 state라고 생각하면 될듯, 이 외 나머지는 setState라고 보면 될듯.
  user: null,
  isLoggedIn: false,
};

// setState하는 부분이 통째로 action과 reducer로 변경되었다고 생각하면 될듯.
export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  };
};
export const loginAction = {
  type: LOG_IN,
};
export const logoutAction = {
  type: LOG_OUT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
