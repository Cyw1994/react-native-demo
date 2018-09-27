import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NaviBar from '../component/NaviBar';
import styles from '../styles/NaviBarStyle';

export default class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputNum:"",
            inputPw:""
        };
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        this.naviStatus = [0, 0, 1, 0];
    }
    onNaviBarPress(aNumber) {
        switch(aNumber) {
            case 0:
                this.props.navigation.navigate("Page1");
                return;
            case 1:
                this.props.navigation.navigate("Page2");
                return;
            case 2:
                return;
            case 3  :
                this.props.navigation.navigate("Page4");
                return;
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <NaviBar naviBarStatus={this.naviStatus} onNaviBarPress={this.onNaviBarPress}/>
        <View style={styles.whatLeft}>
            <Text>
                栏目三内容
            </Text>
        </View>
      </View>
    );
  }
}