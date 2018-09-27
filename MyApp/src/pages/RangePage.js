import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Counter from '../component/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { StackActions, NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/counterAction';
import CommonHeader from '../component/CommonHeader';
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";
import styles from "../styles/RangePageStyle";
import RangeListPage from "./RangeListPage";
import ModalBox from "../component/ModalBox";
import ToggleIcon from '../component/ToggleIcon';
import ViewPagerPage from '../component/ViewPagerPage';

class RangePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    }
  }

  render() {
    // const { info } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;
    return (
      <View style={styles.container}>
        <ScrollableTabView
          ref={"scrollTab"}
          renderTabBar={() => <ScrollableTabBar />}
          onChangeTab={(obj) => {
            // console.log("change to tab index " + obj.i);
            this.setState({
              selectedTab: obj.i
            });
          }}
          initialPage={this.state.selectedTab}
          scrollWithoutAnimation={false}
          tabBarActiveTextColor={"#da3456"}
          tabBarInactiveTextColor={"#D3D3D3"}
          tabBarBackgroundColor={"#FFFFFF"}
          tabBarUnderlineStyle={styles.scrollLine}
        >
          <RangeListPage tabName="精选" tabLabel="精选" />
          <RangeListPage tabLabel="关注" />
          <RangeListPage tabLabel="享美食" />
          <RangeListPage tabLabel="出门浪" />
          <RangeListPage tabLabel="生活控" />
        </ScrollableTabView>
      </View >
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
)(RangePage)