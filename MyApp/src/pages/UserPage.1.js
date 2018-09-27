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
  }

  componentWillUpdate(nextProps, nextStates) {
    this.setState({
      userInfo: testUser,
      isSuccess: true,
      status: "LOGIN_IN_DOING"
    });
  }

  logout() {
    this.props.navigation.dispatch(LogouthNavigation);
  }

  render() {
    const { status, info, isSuccess } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ViewPagerPage />
        </View>
        <View style={{ height: 125, flexDirection: 'row' }}>
          <View style={{ flex: 0.9 }}>
            <Picker
              data={cityCode.CityZoneCode.China.Province}
              ref='_Picker0'
              name='name'
              onRowChange={index => {
                this.rowIndex0 = index;
                this.rowIndex1 = 0;
                this.rowIndex2 = 0;
                this.refs._Picker1.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City);
                this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[0].Area)
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Picker
              data={cityCode.CityZoneCode.China.Province[0].City}
              ref='_Picker1'
              name='name'
              onRowChange={index => {
                this.rowIndex1 = index;
                this.rowIndex2 = 0;
                this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].Area)
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Picker
              data={cityCode.CityZoneCode.China.Province[0].City[0].Area}
              ref='_Picker2'
              name='name'
              onRowChange={index => this.rowIndex2 = index}
            />
          </View>
        </View>
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
        <View style={{ flex: 1 }}>
          <Text>用户: {testUser.name}</Text>
          <Text>状态: {this.props.status}</Text>
          <TouchableOpacity onPress={this.logout.bind(this)} style={{ marginTop: 50 }}>
            <View style={styles.loginBtn}>
              <Text style={styles.btnText}>退出登录</Text>
            </View>
          </TouchableOpacity>
        </View>
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