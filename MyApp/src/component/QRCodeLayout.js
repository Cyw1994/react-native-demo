import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class QRCodeLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QRCode
                value={this.props.content}
                // logo={this.props.logUrl}
                // logoBackgroundColor='white'
            />
        )
    }
}