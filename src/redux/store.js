import {combineReducers, createStore} from "redux";
import reviewsReducer from "./reviewsReducer";

let reducers = combineReducers({
    reviewsReducer,
});

let store = createStore(reducers);

export default store;