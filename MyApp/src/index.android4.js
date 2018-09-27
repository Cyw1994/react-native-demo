import React,{ Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

let widthOfMargin =  Dimensions.get('window').width * 0.05;

export default class MyApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputNum : '',
      inputPw : ''
    };
    this.updateNum = this.updateNum.bind(this);
    this.updatePW = this.updatePW.bind(this);
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

  render() {
    return(
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} placeholder={'Fill in your phone number'} 
          onChangeText = {this.updateNum}/>
        <Text style={styles.textPromptStyle}>
          Your Input Number : {this.state.inputNum}
        </Text>
        <TextInput style={styles.textInputStyle} placeholder={'Fill in your password'} password={true} 
          onChangeText={(newText)=>this.updatePW(newText)}/>
        <Text style={styles.bigTextPrompt}>
          Confirm
        </Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },

  textInputStyle: {
    margin: widthOfMargin,
    fontSize:20,
    backgroundColor:'gray'
  },

  textPromptStyle: {
    margin:widthOfMargin,
    fontSize:20
  },

  bigTextPrompt: {
    margin:widthOfMargin,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:30
  }

});

AppRegistry.registerComponent('MyApp',()=> MyApp);