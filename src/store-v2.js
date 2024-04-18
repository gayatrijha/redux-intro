import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// root reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create store

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
