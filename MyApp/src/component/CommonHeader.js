import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../component/SearchBar';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class commonNavBar extends Component {
    static propTypes = {
        leftItem: PropTypes.func,
        titleItem: PropTypes.func,
        rightItem: PropTypes.func,
    };
    constructor(props) {
        super(props);
        console.log("this.Props:\n" + JSON.stringify(props));
    }
    renderLeftItem() {
        if (this.props.leftItem === undefined) return this._renderLeftItem();
        return this.props.leftItem();
    }
    renderTitleItem() {
        if (this.props.titleItem === undefined) return this._renderTitleItem();
        return this.props.titleItem();
    }
    renderRightItem() {
        if (this.props.rightItem === undefined) return this._renderRightItem();
        return this.props.rightItem();
    }
    render() {
        return (
            <View style={[{
                width: width,
                height: 50,
                backgroundColor: this.props.navBarColor || '#fff',//背景色，默认白色
                flexDirection: 'row',//横向排
                justifyContent: 'space-between',//主轴对齐方式
                alignItems: 'center',//次轴对齐方式（上下居中）
                borderBottomWidth: this.props.borderBottomWidth || 0,//是否有下边框
                borderColor: this.props.borderColor || '#ccc',
                borderBottomColor: "#D3D3D3",
                borderBottomWidth: 0.5
            }, this.props.navBarStyle,]}>

                <View>
                    {this.renderLeftItem()}
                </View>
                <View>
                    {this.renderTitleItem()}
                </View>
                <View>
                    {this.renderRightItem()}
                </View>
            </View>
        );
    }

    _onSearch() {
        // this.props.navigation.dispatch(searchNavigation);
        this.props.navigation.navigate('SearchPage')
    }

    // 头部左侧SearchPage
    _renderLeftItem() {
        if(this.props.onlyTitile) return;
        return (
            <TouchableOpacity onPress={() => { this.props.showSideMenu }} style={styles.navLeft}>
                <Image source={require('../../img/side_menu.png')} style={styles.navIcon} />
            </TouchableOpacity>
        )
    }
    // 头部中间
    _renderTitleItem() {
        return (<SearchBar onClick={this._onSearch.bind(this)} />);
    }
    // 头部右侧
    _renderRightItem() {
        if(this.props.onlyTitile) return;
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SearchPage') }} style={styles.navRight}>
                <Image source={require('../../img/scan_code.png')} style={styles.navIcon} />
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    // header
    navLeft: {
        alignItems: 'center',
        marginLeft: 10,
    },
    navRight: {
        alignItems: 'center',
        marginRight: 10,
    },
    navIcon: {
        height: 20,
        width: 20,
    },
    navText: {
        fontSize: 10,
    },
});