import { ActionTypes } from "../constant/actionTypes"


export const addToCart = (data) => {
  console.warn('action.js addToCart',data)
  return {
    type: ActionTypes.ADD_TO_CARD,
    data:data
  }
}
export const removeToCart = (data) => {
  console.warn('action.js removeToCart',data)
  
  return {
    type: ActionTypes.REMOVE_TO_CARD,
    data:data
  }
}