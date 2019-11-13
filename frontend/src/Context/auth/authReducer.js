import {REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_SUCCESS, LOGIN_VERIFY, LOADING, LOGIN_FAILED, AUTH_ERROR, LOGOUT, USER_LOADED, CLEAR_MESSAGES} from "../Types"

export default (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading:true}
        case REGISTER_SUCCESS:
        case LOGIN_VERIFY:
            return { ...state, ...action.payload, loading:false}
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_FAILED:
        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                ...action.payload,
                token: null,
                isAuth: false,
                loading: false,
                user: null,
                //error: action.payload
            };

        case USER_LOADED:
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: action.payload
            };
        case  CLEAR_MESSAGES:
            return {
                ...state,
                message: null
            };
        default:
            return state;
    }
}