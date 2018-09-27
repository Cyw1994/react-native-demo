import React,{Component} from 'react';

import {
    Text,
    View
} from 'react-native';

import inputStyle from '../styles/inputStyle';

export default class TextContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            
                <Text style={inputStyle.bButtonStyle}>
                    Now State is : {this.props.checkState}
                </Text>
        );
    }
}