import { combineReducers } from "redux";
import requestLoading from "./requestLoadingReducer";

const rootReducer = combineReducers({
    requestLoading,
})
export default rootReducer

