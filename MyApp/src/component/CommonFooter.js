import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
} from 'react-native';

// 取得屏幕的宽高Dimensions
const { Width, Height } = Dimensions.get('window');

export default class commonNavBar extends Component {
    renderItem() {
        return this.props.Item();
    }
    render() {
        return (
            <View style={[{
                width: Width,
                height: 50,
                // alignSelf: 'flex-end',
                backgroundColor: this.props.navBarColor || '#fff',//背景色，默认白色
                flexDirection: 'row',//横向排
                justifyContent: 'space-between',//主轴对齐方式
                alignItems: 'center',//次轴对齐方式（上下居中）
                borderBottomWidth: this.props.borderBottomWidth || 0,//是否有下边框
                borderColor: this.props.borderColor || '#ccc',
            }, this.props.navBarStyle,]}>

                <View>
                    {this.renderItem()}
                </View>
            </View>
        );
    }
}
