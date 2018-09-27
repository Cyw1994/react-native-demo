import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Counter from '../component/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { StackActions, NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/counterAction';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import FavourPage from './FavourPage';
import RecommendPage from './RecommendPage';
import RangePage from './RangePage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    console.log('Main---------- Props: ' + JSON.stringify(this.props));
    console.log('Main---------- States: ' + JSON.stringify(this.state));
    this.state = {
      label: ['关注', '推荐', '排行'],
    };
    this.logout = this.logout.bind(this);
  }

  static navigationOptions = {
    // title: '主页',
    header: null,
    tabBarLabel: "首页",
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return (
          <Image style={{ width: 21, height: 21 }} source={require('../../img/home_selected.png')} />
        );
      } else {
        return (
          <Image style={{ width: 21, height: 21 }} source={require('../../img/home_unselected.png')} />
        );
      }
    }
  };


  logout() {
    // setTimeout(this.props.navigation.dispatch(resetAction),1500);
    this.props.navigation.dispatch(resetAction)
  }


  render() {
    // const { info } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;
    return (
      <ScrollableTabView
        style={{ 
          flex: 1,
        }}
        tabBarActiveTextColor= "red"
        tabBarBackgroundColor= "white"
        tabBarUnderlineStyle={{backgroundColor: "red", height: 2}}
        renderTabBar={() => <DefaultTabBar />}
      >
      <FavourPage tabLabel="关  注" />
      <RecommendPage tabLabel="推  荐" />
      <RangePage tabLabel="排  行" />
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  loginBtn: {
    borderWidth: 1,
    padding: 5,
  },
})

export default connect(
  (state) => ({
    count: state.counter.count,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)