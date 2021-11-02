export const initialState = {
  // 이 부분이 store, 여기 넣어준 값이 초기 state, 이게 react의 state라고 생각하면 될듯, 이 외 나머지는 setState라고 보면 될듯.
  isLoggedIn: false,
  user: {},
};

// setState하는 부분이 통째로 action과 reducer로 변경되었다고 생각하면 될듯.
const LOG_IN = "LOG_IN"; // 액션의 이름
const LOG_OUT = "LOG_OUT";

const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "임우찬",
  },
};
const logoutAction  = {
    type=LOG_OUT,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    }
    case LOG_OUT:{
        return{
            ...state,
            isLoggedIn:false,
            user:null
        }
    }
  }
};

export default reducer;