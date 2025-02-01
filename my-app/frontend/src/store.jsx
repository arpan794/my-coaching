import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productDetailsReducer, productReducer } from "./reducer/productReducer.jsx"

const rootReducer = combineReducers({
  products: productReducer,
  productDetails:productDetailsReducer,
});

let initialState = {}; 

const middleware = [thunk];

// You might want to conditionally use devtools in production or development
const composeEnhancers = process.env.NODE_ENV === 'development'
  ? composeWithDevTools
  : (f) => f; // In production, use a no-op function to skip DevTools

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store, middleware, rootReducer };


