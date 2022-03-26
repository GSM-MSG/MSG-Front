import signup from "./signup";
import signin from "./signin";
import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  signup,
  signin,
});

const configureSotre = () => {
  const enhancer = composeWithDevTools(applyMiddleware());
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: true,
});

export type RootState = ReturnType<typeof rootReducer>;

export default wrapper;
