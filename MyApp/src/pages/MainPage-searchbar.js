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
// import SearchBar from "../component/SearchBar";
import SearchBar from 'react-native-searchbar';
import SearchHeader from 'react-native-search-header';
import styles from '../styles/MainPageStyle';
const Icon = require('react-native-vector-icons/FontAwesome');

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: ['gold!'],
              },
            },
          },
        },
      },
    },
  },
  [4, 2, 'tree'],
];


class MainPage extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }



  render() {
    return (
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Text>Click to search</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <Text>Click to hide search bar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{ marginTop: 110 }}>
            {
              this.state.results.map((result, i) => {
                return (
                  <Text key={i}>
                    {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
                  </Text>
                );
              })
            }
          </View>
          <SearchBar
            ref={(ref) => this.searchBar = ref}
            data={items}
            placeholder="请输入搜索内容"
            iconColor="#000000"
            textColor="#000000"
            selectionColor="lightgray"
            handleResults={this._handleResults}
            backCloseSize={20}
            fontSize={16}
            showOnLoad
          />
        </View>
      </ScrollView>
    );
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