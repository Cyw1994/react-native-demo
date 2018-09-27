'use strict'
import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from '../styles/MainPageStyle';

export default class WouldLikeList extends Component {
    constructor(props){
        super(props);
        this.renderItem.bind(this);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>- 猜你喜欢 - </Text>
                </View>
                <View style={styles.body}>
                    {this.renderItem()}
                </View>
                <View style={styles.footer}>
                </View>
            </View>
        )
    }
}