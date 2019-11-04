import {REGISTER_SUCCESS, REGISTER_FAILED, USER_LOADED} from "../Type"

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log("%%%%%%%%%%%%%%", action)
            return { ...state, ...action.payload, loading:false}
        case REGISTER_FAILED:
            console.log("%%%%%%%%%%%%%%", "failed", action)
            return { ...state, ...action.payload, loading:false}
     
        default:
            return state;
    }
}