import React, { Component} from 'react';  
import {
    Text,
    View            
} from 'react-native';

import inputStyle from '../styles/inputStyle';

export default class WaitingLeaf extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={inputStyle.container}>
                <Text style={inputStyle.textPromptStyle}>
                    Phone Number: {this.props.phoneNumber}
                </Text>
                <Text style={inputStyle.textPromptStyle}>
                    Password: {this.props.userPw}
                </Text>
                <Text style={inputStyle.bigTextPrompt} onPress={()=>this.onGobackPressed()}>
                    Return
                </Text>
            </View>
        );
    }

    onGobackPressed(){
        this.props.onGobackPressed();
    }
}


