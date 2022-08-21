import { REQUEST_LOADING } from "../actions/type";

const requestLoadingReducer = (state={isRequestLoading:false},action)=>{
    switch(action.type){
        case REQUEST_LOADING:
            return{
                ...state, isRequestLoading:action.payload
            }
        default:
            return state
    }
}
export default requestLoadingReducer