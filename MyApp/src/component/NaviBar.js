import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import styles from '../styles/NaviBarStyle';

export default class NaviBar extends Component {
    constructor(props){
        super(props);
        this._naviTab0Pressed = this._naviTab0Pressed.bind(this);
        this._naviTab1Pressed = this._naviTab1Pressed.bind(this);
        this._naviTab2Pressed = this._naviTab2Pressed.bind(this);
        this._naviTab3Pressed = this._naviTab3Pressed.bind(this);
    }

    _naviTab0Pressed(){
        console.log("Tab 0 Pressed");
        this.props.onNaviBarPress(0);
    }
    _naviTab1Pressed(){
        console.log("Tab 1 Pressed");
        this.props.onNaviBarPress(1);
    }
    _naviTab2Pressed(){
        console.log("Tab 2 Pressed");
        this.props.onNaviBarPress(2);
    }
    _naviTab3Pressed(){
        console.log("Tab 3 Pressed");
        this.props.onNaviBarPress(3);
    }

    componentWillMount() {
        // 通过 props (属性)来判断哪个按钮是被选中的
        // 利用 javascript 数组的 map 函数，从一个数组对应生成另一个数组 buttonColors
        // 这步过程不是必须，可用其他方法实现
        // 未选中： 0 - 白色
        // 选中： 1 - 黑色
        this.buttonColors = this.props.naviBarStatus.map(
            function(aNumber) {
                if (aNumber == 0) return "white";
                return "gray";
            }
        );
    }

    render() {
        return(
            <View style={styles.naviRow}>
                <TouchableHighlight onPress={this._naviTab0Pressed}>
                    <View style={[styles.button, {backgroundColor: this.buttonColors[0]}]}>
                        <Text style={styles.textStyle}>
                            栏目一
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab1Pressed}>
                    <View style={[styles.button, {backgroundColor: this.buttonColors[1]}]}>
                        <Text style={styles.textStyle}>
                            栏目二
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab2Pressed}>
                    <View style={[styles.button, {backgroundColor: this.buttonColors[2]}]}>
                        <Text style={styles.textStyle}>
                            栏目三
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._naviTab3Pressed}>
                    <View style={[styles.button, {backgroundColor: this.buttonColors[3]}]}>
                        <Text style={styles.textStyle}>
                            栏目四
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        ); 
    }
}