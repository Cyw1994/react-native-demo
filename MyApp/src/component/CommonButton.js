import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const Width = Dimensions.get("window").width;

export default class CommonButton extends Component {
    constructor(props) {
        super(props);
    }

    nextNavigation = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: this.props.next }),
        ]
    });
    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.dispatch(this.nextNavigation) }} style={styles.btnContainer}>
                <Text style={styles.btnText}>
                    {this.props.content}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f5a623',
        backgroundColor: '#343434',
        borderRadius: 5,
        width: Width * 0.3,
        height: 30,
        margin: 15
    }, btnText: {
        padding: 5,
        fontSize: 14,
        color: 'white',
    },
})