import * as loginType from '../constants/loginTypes';

const initialState = {
    status: 'PLEASE_LOGIN',
    isSuccess: false,
    userInfo: null
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case loginType.LOGIN_IN_DOING:
            return {
                ...state,
                status: loginType.LOGIN_IN_DOING,
                isSuccess: false,
                userInfo: null
            }
        case loginType.LOGIN_IN_DONE:
            return {
                ...state,
                status: loginType.LOGIN_IN_DONE,
                isSuccess: true,
                userInfo: action.userInfo
            }
        case loginType.LOGIN_IN_QUIT:
            return {
                ...state,
                status: loginType.LOGIN_IN_QUIT,
                isSuccess: true,
                userInfo: null
            }

        case loginType.LOGIN_IN_ERR:
            return {
                ...state,
                status: loginType.LOGIN_IN_ERR,
                isSuccess: false,
                userInfo: null
            }
        default:
            return state;
    }
}