import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import * as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions, NavigationActions } from 'react-navigation';
import cityCode from '../constants/ChinaCityCode';
import Picker from 'react-native-roll-picker';
import ViewPagerPage from "../component/ViewPagerPage";

const LogouthNavigation = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'LoginPage' }),
  ]
});

const testUser = {
  name: "Henrry",
  age: 24,
  sex: "Male"
}

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.rowIndex0 = 0;
    this.rowIndex1 = 0;
    this.rowIndex2 = 0;
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

  // static navigationOptions = {
  //   // title: '登陆',
  //   headerTitle: "我",
  //   tabBarLabel: "我",
  //   tabBarIcon:({focused}) => {
  //     if(focused) {
  //       return (
  //         <Image style={{width:21, height:21}} source={require('../../img/me_selected.png')} />
  //       );
  //     } else {
  //       return (
  //         <Image style={{width:21, height:21}} source={require('../../img/me_unselected.png')} />
  //       );
  //     }
  //   }
  // };

  logout() {
    // setTimeout(this.props.navigation.dispatch(resetAction),1500);
    this.props.navigation.dispatch(LogouthNavigation);

    // this.props.navigation.navigate('LoginPage');
  }

  render() {
    const { status, info, isSuccess } = this.props;
    return (

      <View style={{ flex: 1 }}>
        <ViewPagerPage />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FFFF'
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