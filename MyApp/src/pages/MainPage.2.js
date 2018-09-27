import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Counter from '../component/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { StackActions, NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/counterAction';
import SearchBar from "../component/SearchBar";
import SearchHeader from 'react-native-search-header';
import styles from '../styles/MainPageStyle';

class MainPage extends Component {
  constructor(props) {
    super(props);
    console.log('Main---------- Props: ' + JSON.stringify(this.props));
    console.log('Main---------- States: ' + JSON.stringify(this.state));
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
      <View style={styles.container}>
        <View style={{ height: 42, backgroundColor: "white" }}>
        <TouchableOpacity onPress={() => this.searchHeader.show()}>
          <Text style={{color: "black"}}> show me </Text>
          </TouchableOpacity>
        </View>
        <StatusBar barStyle='light-content' />
        <SearchHeader
          ref={(searchHeader) => {
            this.searchHeader = searchHeader;
          }}
          onClear={() => {
            console.log(`Clearing input!`);
          }}
          onGetAutocompletions={async (text) => {
            if (text) {
              let reslut = "here is search result";
              return reslut;
            } else {
              return "no results found";
            }
          }}
          topOffset={0}
          autoCorrect={false}
          placeholder={"请输入搜索内容"}
        />
        <View style={{ marginTop: 200 }}>
          <View style={styles.button}>
            <Button
              title='Open Search'
              color='#f5fcff'
              onPress={() => this.searchHeader.show()}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Clear'
              color='#f5fcff'
              onPress={() => {
                this.searchHeader.clear();
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default connect(
  (state) => ({
    count: state.counter.count,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)