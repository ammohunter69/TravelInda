import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { stateDetialsReducer, stateListReducer } from "./redux/stateReducers";

const reducer = combineReducers({
  stateList: stateListReducer,
  stateDetials: stateDetialsReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
