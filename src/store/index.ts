import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducers";
import { createLogger } from 'redux-logger';
const middleware: any[] = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const store = createStore(reducer, applyMiddleware(...middleware));
export default store;
