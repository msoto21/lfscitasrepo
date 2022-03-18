import { createStore } from "redux";
import user from './reducers/userReducer';

const store = createStore(user);

export default store;