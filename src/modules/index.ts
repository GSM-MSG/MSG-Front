import register from "./register";
import login from "./login";
import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  register,
  login,
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
