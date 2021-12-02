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
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN = "LOG_IN"; // 액션의 이름
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const signUpAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data: data,
  };
};
export const loginAction = {
  type: LOG_IN_REQUEST,
};
export const logoutAction = {
  type: LOG_OUT_REQUEST,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        loginData: action.data,
        isLoading: true,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        isLoading: false,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP_REQUEST: {
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
