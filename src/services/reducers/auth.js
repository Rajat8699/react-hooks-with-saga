import {LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED} from '../type';

const initialState = {
        Login:[],
        Register:[],
        Forgot:[]
}
const auth = (state=initialState, action) => {
    switch (action) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                Login:action.data,
            }
            case LOGIN_FAILED:
                return{
                    ...state,
                    Login:action.error
                }
                case REGISTER_SUCCESS:
            return{
                ...state,
                Register:action.data,
            }
            case REGISTER_FAILED:
                return{
                    ...state,
                    Register:action.error
                }
                case FORGOT_PASSWORD_SUCCESS:
            return{
                ...state,
                Forgot:action.data,
            }
            case FORGOT_PASSWORD_FAILED:
                return{
                    ...state,
                    Forgot:action.error
                }
        default:
            return state
    }
}
export default auth;