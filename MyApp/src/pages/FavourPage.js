import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Counter from '../component/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { StackActions, NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/counterAction';

class FavourPage extends Component {
  constructor(props) {
    super(props);
    console.log('Main---------- Props: ' + JSON.stringify(this.props));
    console.log('Main---------- States: ' + JSON.stringify(this.state));
    this.logout = this.logout.bind(this);
  }

  logout() {
    // setTimeout(this.props.navigation.dispatch(resetAction),1500);
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    // const { info } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;
    return (
      <View style={styles.container}>
        <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
        </Counter>
      </View>

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
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
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
)(FavourPage)