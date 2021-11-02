export const initialState = {
  mainPosts: [],
};


const ADD_POST="ADD_POST",
const ADD_DUMMY = 'ADD_DUMMY';

const addPost={
    type:ADD_POST,
}

const addDummy={
    type:ADD_DUMMY,
    data:{
        content:'Hello',
        UserId:1,
        User:{
            nickname:'임우찬'
        },        
    }
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:{}
        case ADD_DUMMY:{
            return {
                ...state, // spread쓰는 이유? 새로운객체 생성해 참조 바꿀라고(바뀐건지 안바뀐건지 모르니깐.)
                mainPosts:[action.data, ...state.mainPosts],
            }
        }
    }
}

export default reducer;