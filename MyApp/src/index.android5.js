import React, {Component} from 'react';

import {
  AppRegistry,
  BackHandler,
  Platform
} from 'react-native';

import LoginLeaf from './constants/LoginLeaf';
import WaitingLeaf from './constants/WaitingLeaf';


export default class MyApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentScene:'Login',
      phoneNumber:'',
      userPw:''
    }

    this.handleBackSignal = this.handleBackSignal.bind(this);
    this.onLoginPressed = this.onLoginPressed.bind(this);
  }

  onLoginPressed( aNumber, aPw) {
    this.setState({
      currentScene:'Waiting',
      phoneNumber:aNumber,
      userPw:aPw
    });
  }

  render(){
    if(this.state.currentScene === 'Login'){
      return( 
       <LoginLeaf onLoginPressed={this.onLoginPressed} />
      );
    }else {
      return(
        <WaitingLeaf phoneNumber = {this.state.phoneNumber} onGobackPressed={this.handleBackSignal} userPw={this.state.userPw} />
      );
    }
  }

  handleBackSignal(){
    if(this.state.currentScene === 'Waiting') {
      this.setState({
        currentScene:'Login'
      });
      return true;
    }else {
      return false;
    }
  }

  componentDidMount(){
    if( Platform.OS == 'android'){
      BackHandler.addEventListener('hardwareBackPress',this.handleBackSignal);
    }
  }

  componentWillUnmount(){
    if( Platform.OS == 'android'){
      BackHandler.removeEventListener('hardwareBackPress',this.handleBackSignal);
    }
  }

}

AppRegistry.registerComponent('MyApp',()=>MyApp);