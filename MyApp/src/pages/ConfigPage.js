import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  ToastAndroid,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import * as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions, NavigationActions } from 'react-navigation';
import ActionSheet from 'react-naive-highly-customizable-action-sheet';
import QRCodeLayout from '../component/QRCodeLayout';
import FlatListContent from '../component/FlatListContent';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'RootPage' })
  ]
})
const testUser = {
  name: "Henrry",
  age: 24,
  sex: "Male"
}

class UserPage extends Component {
  constructor(props) {
    super(props);
    console.log('User---------- Props: ' + JSON.stringify(this.props));
    console.log('User---------- States: ' + JSON.stringify(this.state));
  }

  componentWillUpdate(nextProps, nextStates) {
    this.setState({
      userInfo: testUser,
      isSuccess: true,
      status: "LOGIN_IN_DOING"
    });
  }

  static navigationOptions = {
    // title: '登陆',

  };

  render() {
    const { status, info, isSuccess } = this.props;
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
        <View>
          <QRCodeLayout />
        </View>
        <FlatListContent />

      </View>
    )
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
    this.props.navigation.dispatch(resetAction);
    return true;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    padding: 5,
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'black'
  }
});

export default connect(
  (state) => ({
    status: state.login.status,
    isSuccess: state.login.isSuccess,
    info: state.login.userInfo,
  })
)(UserPage)