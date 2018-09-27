import * as loginType from '../constants/loginTypes';

// 模拟数据

const testUser = {
    name: "Henrry",
    age: 24,
    sex: "Male"
}

// 访问登陆接口 根据返回结果来划分 action 的类别，返回 action 对象，dispacher 给 reducer 处理

export function login() {
    console.log('Login Action');
    return dispatch => {
        dispatch(loginDoing()); // 发送给 reducer => 正在执行 LOGIN_IN_DOING
        let result = fetch('https://www.baidu.com')
            .then((res) => {
                dispatch(loginSuccess(testUser));
            }).catch((e) => {
                dispatch(loginError());
            })
    }
}

function loginDoing() {
    return {
        type: loginType.LOGIN_IN_DOING
    }
}

function loginSuccess(user) {
    return {
        type: loginType.LOGIN_IN_DONE,
        userInfo: user
    }
}

function loginError() {
    return {
        type: loginType.LOGIN_IN_ERR
    }
}

function loginQuit() {
    return {
        type: loginType.LOGIN_IN_QUIT
    }
}