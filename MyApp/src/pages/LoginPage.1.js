import React, { Component } from 'react';
import {
  View,
  ScrollView,
  ListView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  Dimensions,
  BackHandler,
  ToastAndroid,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import * as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions, NavigationActions } from 'react-navigation'
import Modal from 'react-native-modalbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ActionSheet from 'react-naive-highly-customizable-action-sheet';
import CommonButton from '../component/CommonButton';
import styles from '../styles/LoginPageStyle';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const afterLoginNavigation = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'RootPage' }),
  ]
});
let seeOrhide = true;
class LoginPage extends Component {

  static navigationOptions = {
    //headerTitle: loginTitile,
    title: '登录',
    headerTitle: "欢  迎  登  录",
    headerTitleStyle: {
      flex: 1,
      fontSize: 16,
      textAlign: 'center',
    },
    // header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      securityPwd: true,
      userInfo: ""
    };
    this.showActionSheet = this.showActionSheet.bind(this);
    this._displyPwd = this._displyPwd.bind(this);
  }

  // 监听物理后退键
  componentWillMount() {
    console.log("Add back litenner")
    BackHandler.addEventListener("hardwareBackPress", this._onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._onBackAndroid);
  }

  _onBackAndroid = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      BackHandler.exitApp();
      return;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show("再按一次退出应用", ToastAndroid.LONG);
    return true
  }

  render() {
    return (
      <View style={styles.container}>

        {/* <ScrollableTabView
          renderTabBar={() => <DefaultTabBar style={{ borderTopWidth: 1, borderBottomWidth: 0 }} />}
          tabBarTextStyle={{ "fontSize": 15, "lineHeight": 30 }}
          tabBarBackgroundColor="white"
          tabBarActiveTextColor="darkgrey"
          tabBarInactiveTextColor="grey"
          locked={false}
          tabBarUnderlineStyle={{ backgroundColor: "red", height: 3 }}>
          <MainPage tabLabel='Home' />
          <LoginPage tabLabel='Login' />
          <Text tabLabel='Tab3' />
        </ScrollableTabView> */}

        <Image source={require("../../img/logo.jpg")} style={styles.titleImg} />
        <KeyboardAwareScrollView style={styles.logForm}>
          <View style={styles.inputForm}>
            <Image resizeMode='stretch' source={require("../../img/login-acc.png")} style={styles.iconImg} />
            <TextInput style={[styles.inputText, { width: Width * 0.8 - 50 }]} placeholder="请输入账号" />
          </View>
          <View style={styles.inputForm}>
            <Image resizeMode='stretch' source={require("../../img/login-pwd.png")} style={styles.iconImg} />
            <TextInput style={[styles.inputText, { width: Width * 0.8 - 90 }]} placeholder="请输入密码" secureTextEntry={this.state.securityPwd} />
            {
              seeOrhide ? <TouchableOpacity onPress={this._displyPwd}><Image resizeMode='stretch' source={require("../../img/login-hide.png")} style={{ height: 16, width: 22 }} /></TouchableOpacity>
                : <TouchableOpacity onPress={this._displyPwd}><Image resizeMode='stretch' source={require("../../img/login-see.png")} style={{ height: 16, width: 22 }} /></TouchableOpacity>
            }
          </View>
        </KeyboardAwareScrollView>

        {/* <Button
            styles={styles.btn}
            title="登  陆"
            onPress={() => { this.props.navigation.dispatch(afterLoginNavigation)}}
            color="#343434"
            width={Dimensions.get('window').width/2}>
          </Button> */}

        <View style={styles.btnForm}>
          <CommonButton content="登     录" navigation={this.props.navigation} next="RootPage" reset={true} />
          {/* <TouchableOpacity onPress={() => { this.props.navigation.dispatch(afterLoginNavigation) }} style={styles.loginBtn}>
            <Text style={styles.btnText}>登     录</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => { this.props.navigation.dispatch(needRegisterAction) }} style={styles.loginBtn}>
            <Text style={styles.btnText}>注 册</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.moreInfo}>
          <TouchableOpacity onPress={() => this.showActionSheet(1)} >
            <Text >找回密码</Text>
          </TouchableOpacity>
          <View style={{ height: 16, width: 1, backgroundColor: 'black', marginHorizontal: 8 }} />

          <TouchableOpacity onPress={() => this.showActionSheet(2)}>
            <Text >更多选项</Text>
          </TouchableOpacity>
        </View>
        <ActionSheet
          mainTitle="请选择您的操作"
          itemTitles={["通过绑定找回", "账号申述"]}
          selectionCallbacks={[this.redict2Findpwd, this.redict2Findpwd]}
          mainTitleTextAlign='center'
          contentBackgroundColor='#EFF0F1'
          bottomSpace={110}
          cancelVerticalSpace={10}
          borderRadius={5}
          sideSpace={6}
          itemTitleColor='#006FFF'
          cancelTitleColor='#006FFF'
          ref={(actionsheet) => { this.forgetPwdSheet = actionsheet }}
        />

        <ActionSheet
          mainTitle="请选择您的操作"
          itemTitles={["前往安全中心", "注册"]}
          selectionCallbacks={[this.redict2Register.bind(this), this.redict2Register.bind(this)]}
          mainTitleTextAlign='center'
          contentBackgroundColor='#EFF0F1'
          bottomSpace={110}
          cancelVerticalSpace={10}
          borderRadius={5}
          sideSpace={6}
          itemTitleColor='#006FFF'
          cancelTitleColor='#006FFF'
          ref={(actionsheet) => { this.moreInfoSheet = actionsheet }}
        />
      </View>
    )
  }

  _displyPwd() {
    seeOrhide = !seeOrhide;
    console.log("Change to " + seeOrhide);
    this.setState({
      securityPwd: seeOrhide
    });
    return true;
  }

  showActionSheet(index) {
    switch (index) {
      case 1:
        this.forgetPwdSheet.show();
        break;
      case 2:
        this.moreInfoSheet.show();
    }
    // this.actionsheet.show();
  }

  //callback 1
  clickedByPhone() {
    alert('By Phone');
  }

  //callback 2
  clickedByMessage() {
    alert('By Message');
  }

  //callback 3
  clickedByEmail() {
    alert('By Email');
  }

  redict2Register() {
    // this.props.navigation.dispatch(needRegisterAction);
    this.props.navigation.navigate('RegisterPage');
  }

  redict2Findpwd() {
    Alert.alert("找回密码");
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