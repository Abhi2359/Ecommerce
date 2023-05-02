import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDeatilsReducer, productsReducer } from "./reducers/productReducer";

const reducers = combineReducers({
  products:productsReducer,
  productDetails:productDeatilsReducer
});
let initialState = {};

const middleware = [thunk];

const store = configureStore(
  {reducer:reducers},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;