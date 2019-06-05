import {combineReducers} from "redux";

// 액션 타입 선언
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";

const initialState = {
  number: 0
};

// 리듀서
const counter = (state = initialState, action:any) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
};

// 액션 생성자는 함수 => 두 단어 이상은 camelCase로 작성한다.
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const setColor = (color:any) => {
  return {
    type:SET_COLOR,
    color
  };
};

const reducers = combineReducers({
  counter
});

export default reducers;