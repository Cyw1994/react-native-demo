import React, { Component  } from 'react';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const Tab = TabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions:({navigation}) => ({
        tabBarLable:"栏目一",
      })
    },
    Page2: {
      screen: Page2,
      navigationOptions:({navigation}) => ({
        tabBarLable:"栏目二",
      })
    }
  }
);

const Navigator = StackNavigator(
  // {
  //   Tab: {
  //     screen:Tab
  //   },
  // }
  {
    Page1: {
      screen: Page1,
      navigationOptions:({navigation}) => ({
        headerTitle:"主页",
        // title:"主页"
      }),
    },
    Page2: {
      screen: Page2
    },
    Page3: {
      screen: Page3
    },
    Page4: {
      screen: Page4
    },
  },
  {
    initialRouteName: 'Page1',
  }
);

export default class MyApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navigator />;
  }

}
