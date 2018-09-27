import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import * as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions, NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import RootPage from './RootPage';
import LCCountDownButton from '../component/LCCountDownButton';
import CommonButton from '../component/CommonButton';

import styles from '../styles/RegisterPageStyle';

const afterRegisterNavigation = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'RootPage' }),
    ]
});

const returnToLoginNavigation = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'LoginPage' }),
    ]
});

class LoginPage extends Component {
    static navigationOptions = {
        headerBackTitle: '返回',
        headerTitle: "请输入注册信息",
        headerTitleStyle: {
            fontSize: 16,
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            checkCode: []
        }
        this._checkCodeIn = this._checkCodeIn.bind(this);
        console.log("chage page to RegisterPage");
    }

    _countDownButtonPressed() {
        //触发倒计时
        this.countDownButton.startCountDown();

        //请求发送验证码
        // fetch('请求验证码')
        //     .then()
        //     .catch()
    }

    _checkCodeIn(newNum) {
        // console.log(newNum);
        let codeList = this.state.checkCode;
        // console.log("codelist : " + codeList);
        let newList = newNum.split('');
        // console.log("newList : " + newList);
        // console.log("newNum.length : " + newList.length);
        // console.log("codeList.length : " + codeList.length);
        let newPush = newList[newList.length - 1];
        console.log("newPush : " + newPush);
        if (newNum.length > codeList.length) {
            codeList.push(newPush);
            this.setState({
                checkCode: codeList
            });
        } else {
            codeList.pop();
            this.setState({
                checkCode: codeList
            })
        }
        console.log(this.state.checkCode);
    }

    render() {
        const checkCode = this.state.checkCode;
        return (
            <View style={styles.container}>
                <Image source={require("../../img/logo.jpg")} style={styles.titleImg} />
                <KeyboardAwareScrollView style={styles.form}>
                    <View style={styles.inputForm}>
                        <View style={styles.inputTitle}>
                            <Text>+86</Text>
                        </View>
                        <View style={styles.inputBody}>
                            <TextInput maxLength={11} keyboardType="numeric" placeholder="请输入手机号" />
                        </View>
                        <View style={styles.checkBtn}>
                            <LCCountDownButton
                                beginText='获取验证码'
                                endText='获取验证码'
                                count={30}
                                pressAction={this._countDownButtonPressed.bind(this)}
                                changeWithCount={(count) => "再次获取(" +count + ")"}
                                id='register'
                                ref={(e) => { this.countDownButton = e }}
                            />
                        </View>
                    </View>
                    <View style={styles.inputForm}>
                        <View style={styles.inputTitle}>
                            <Text>验证码</Text>
                        </View>
                        <View style={[styles.inputBody, { width: 0 }]}>
                            <TextInput
                                ref="_checkCodeInput"
                                onChangeText={(newNum) => this._checkCodeIn(newNum)}
                                // value={this.state.checkCode.join('')}
                                underlineColorAndroid="transparent"
                                maxLength={6}
                                keyboardType="numeric"
                                selectionColor="transparent"
                                // placeholder="请输入验证码" 
                                style={{ color: "black" }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => this.refs._checkCodeInput.focus()} style={styles.checkCodeContainer}>
                            <View style={[styles.checkCodeBorder, { borderColor: checkCode[0] ? "black" : "#C0C0C0" }]}>
                                <Text style={[styles.checkCodeText, { color: checkCode[0] ? "black" : "#C0C0C0" }]}>
                                    {checkCode[0] || "-"}
                                </Text>
                            </View>
                            <View style={[styles.checkCodeBorder, { borderColor: checkCode[1] ? "black" : "#C0C0C0" }]}>
                                <Text style={[styles.checkCodeText, { color: checkCode[1] ? "black" : "#C0C0C0" }]}>
                                    {checkCode[1] || "-"}
                                </Text>
                            </View>
                            <View style={[styles.checkCodeBorder, { borderColor: checkCode[2] ? "black" : "#C0C0C0" }]}>
                                <Text style={[styles.checkCodeText, { color: checkCode[2] ? "black" : "#C0C0C0" }]}>
                                    {checkCode[2] || "-"}
                                </Text>
                            </View>
                            <View style={[styles.checkCodeBorder, { borderColor: checkCode[3] ? "black" : "#C0C0C0" }]}>
                                <Text style={[styles.checkCodeText, { color: checkCode[3] ? "black" : "#C0C0C0" }]}>
                                    {checkCode[3] || "-"}
                                </Text>
                            </View>
                            <View style={[styles.checkCodeBorder, { borderColor: checkCode[4] ? "black" : "#C0C0C0" }]}>
                                <Text style={[styles.checkCodeText, { color: checkCode[4] ? "black" : "#C0C0C0" }]}>
                                    {checkCode[4] || "-"}
                                </Text>
                            </View>
                            <View style={[styles.checkCodeBorder, { borderColor: checkCode[5] ? "black" : "#C0C0C0" }]}>
                                <Text style={[styles.checkCodeText, { color: checkCode[5] ? "black" : "#C0C0C0" }]}>
                                    {checkCode[5] || "-"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputForm}>
                        <View style={styles.inputTitle}>
                            <Text>密码</Text>
                        </View>
                        <View style={[styles.inputBody, { width: 250 }]}>
                            <TextInput keyboardType={"numbers-and-punctuation"} placeholder="请输入密码" secureTextEntry={true} />
                        </View>

                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.btnForm}>
                    {/* <TouchableOpacity onPress={() => { this.props.navigation.dispatch(afterRegisterNavigation) }} style={styles.loginBtn}>
                        <Text style={styles.btnText}>注册并登陆</Text>
                    </TouchableOpacity> */}
                    <CommonButton content="注册并登陆" reset={true} navigation={this.props.navigation} next="RootPage" />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.login.userInfo,
        status: state.login.status,
        isSuccess: state.login.isSuccess,
    }
}

// export default connect(
//   (state) => ({
//     status: state.login.status,
//     isSuccess: state.login.isSuccess,
//     info: state.login.userInfo,
//   }),
//   (dispatch) => ({
//     login: () => dispatch(loginAction.login()),
//   })
// )(LoginPage)

export default connect(
    mapStateToProps,
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    })
)(LoginPage)