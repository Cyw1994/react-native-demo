import React, { Component } from 'react';
import { Image, BackHandler, ToastAndroid, } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MainPage from './MainPage';
import UserPage from './UserPage';
import RangePage from './RangePage';

export const TabNav = TabNavigator(
    {
        Main: {
            screen: MainPage,
            navigationOptions: ({ navigation }) => ({
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
            })
        },
        Config: {
            screen: RangePage,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "推荐",
                tabBarLabel: "推荐",
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return (
                            <Image style={{ width: 21, height: 21 }} source={require('../../img/drive_selected.png')} />
                        );
                    } else {
                        return (
                            <Image style={{ width: 21, height: 21 }} source={require('../../img/drive_unselected.png')} />
                        );
                    }
                }
            })
        },
        User: {
            screen: UserPage,
            navigationOptions: ({ navigation }) => ({
                headerTitle: "我",
                tabBarLabel: "我",
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return (
                            <Image style={{ width: 21, height: 21 }} source={require('../../img/me_selected.png')} />
                        );
                    } else {
                        return (
                            <Image style={{ width: 21, height: 21 }} source={require('../../img/me_unselected.png')} />
                        );
                    }
                }
            })
        },
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#4BC1D2',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop: 1,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 11,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: { height: 0 },
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: false,
        //是否在切换tab页时使用动画
        animationEnabled: false,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    }
);

export default class RootPage extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("Add back litenner")
        BackHandler.addEventListener("hardwareBackPress", this._onBackAndroid);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress", this._onBackAndroid);
    }

    _onBackAndroid = () => {
        if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){
            BackHandler.exitApp();
            return;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show("再按一次退出应用", ToastAndroid.LONG);
        return true
    }
}