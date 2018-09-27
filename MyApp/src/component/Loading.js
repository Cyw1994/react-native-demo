import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

export default class Loading extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.bgColor}]}>
                <ActivityIndicator
                    style={styles.loding}
                    animating={true}
                    colors= "gray"
                    size = "small"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    loding: {
        margin: 10
    }
})