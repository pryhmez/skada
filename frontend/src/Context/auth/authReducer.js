import {REGISTER_SUCCESS, REGISTER_FAILED, USER_LOADED} from "../Type"

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state,...action.msg,loading:false}
    
        default:
            return state;
    }
}