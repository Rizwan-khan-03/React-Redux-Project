//this our app root reducer here we can combine all reducer in one combine reducer
import { combineReducers } from "redux";
import cardItems from './reducer'
// import { productReducer ,selectedProductReducer} from "./productReducer";


export default combineReducers({
  cardItems,
  // allProduct: productReducer,//this is the reducer key which assigne value productReducer
  // product:selectedProductReducer
})
