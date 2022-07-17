// this is the reducer here we have to decide  which type of data is comming from action and where to send it based on the action types
import { ActionTypes } from "../constant/actionTypes";
const initialState = {
  cardData: [],
};

 const cardItems = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CARD:
      console.warn('reducer.js ADD_TO_CARD',action)
      return [...state, { cardData: action.data } ];
      break;
     case ActionTypes.REMOVE_TO_CARD:
      console.warn('reducer.js REMOVE_TO_CARD', action)
      state.pop();
      return [...state, ];
      break;
    default:
      return state;
  }
}
export default cardItems;