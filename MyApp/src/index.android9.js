import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native';

import AlertView from './component/AlertView';


export default class MyApp extends Component {
    render() {
        return (
            <View style={styles.container}>

                {this._renderAndroidAlert()}

                <Text style={styles.welcome} onPress={() => this._show()}>
                    点我->弹出框,PixelRatio={PixelRatio.get()}
                </Text>
            </View>
        );
    }

    _renderAndroidAlert() {
        return(
            <AlertView ref='alert' confirm={'确定'} cancel={'取消'}
                         alertTitle={'删除提示'} alertContent={'执行此操作后，将无法关注该联系人，请确认'}
                         confirmClick={() => {
                             this._confirm()
                         }}
                         dissmissClick={() => {
                             this._cancel()
                         }}
            />
        );

    }

    _show = () => {
        this.refs.alert && this.refs.alert.showDialog();
    }

    _confirm = () => {
        alert('点击了确定')
    };

    _cancel = () => {
        alert('点击了取消')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});