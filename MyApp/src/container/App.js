import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';
import UserPage from '../pages/UserPage';
import { TabNav } from '../pages/RootPage';
import SideMenuPage from '../pages/SideMenuPage';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const App = StackNavigator(
    {
        LoginPage: {
            screen: LoginPage,
        },
        RegisterPage: {
            screen: RegisterPage,
        },
        RootPage: {
            screen: TabNav,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        SearchPage: {
            screen: SearchPage
        },
        SideMenuPage: {
            screen: SideMenuPage,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: "RootPage",
        navigationOptions: {    //配置顶部导航 
            headerTitleStyle: {   //导航栏文字的样式
                fontSize: 18,
                color: '#b2b2b2',
            },
            // headerBackTitleStyle: {    //‘返回’文字的样式
            //   color: '#b2b2b2'
            // },
            headerStyle: {        //导航栏的样式
                backgroundColor: 'white',
                borderBottomColor: '#333333',
                borderBottomWidth: 2
            }
        }
    });
export default App;


