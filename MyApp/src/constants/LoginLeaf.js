import React,{ Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Alert
} from 'react-native';

import inputStyle from '../styles/inputStyle';

export default class LoginLeaf extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputNum : '',
      inputPw : ''
    };
    this.updateNum = this.updateNum.bind(this);
    this.updatePW = this.updatePW.bind(this);
    this.jumpToWaiting = this.jumpToWaiting.bind(this);
  }

  updateNum(newText){
    this.setState((state)=>{
      return {
        inputNum:newText
      };
    });
  }

  updatePW(newText){
    this.setState(()=>{
      return {
        inputPw:newText
      };
    });
  }

  
  userPressConfirm(){
    Alert.alert(
      'Warning:',
      'Are you sure to use Number: '+this.state.inputNum+' ?',
      [
        {text:' No ',onPress:(()=>{}),style:'cancel'},
        {text:' Yes ',onPress:this.jumpToWaiting}
      ]
    );
  }

  jumpToWaiting(){
    this.props.onLoginPressed(this.state.inputNum, this.state.inputPw);
  }

  render() {
    return(
      <View style={inputStyle.container}>
        <TextInput style={inputStyle.textInputStyle} placeholder={'Fill in your phone number'} 
          onChangeText = {this.updateNum}/>
        <Text style={inputStyle.textPromptStyle}>
          Your Input Number : {this.state.inputNum}
        </Text>
        <TextInput style={inputStyle.textInputStyle} placeholder={'Fill in your password'} password={true} 
          onChangeText={(newText)=>this.updatePW(newText)}/>
        <Text style={inputStyle.bigTextPrompt} onPress={()=>this.userPressConfirm()}>
          Confirm
        </Text>
      </View>
    )
  }
}
