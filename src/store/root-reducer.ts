import { combineReducers } from "redux";
import { loginReducer } from "./login/login-reducer.ts";
// import chatReducer from "./chatReducer";
// import userReducer from "./userReducer";

const rootReducer = combineReducers({
  //   chat: chatReducer,
  login: loginReducer,
  //   user: userReducer,
  // Add more reducers here if needed
});

export default rootReducer;
