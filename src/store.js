import { combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// root reducer
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
// create store

const store = createStore(rootReducer);

export default store;
