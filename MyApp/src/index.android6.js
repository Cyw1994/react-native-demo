import React, {Component} from 'react';

import {
  AppRegistry,
  View,
  Text,
  Alert
} from 'react-native';

import inputStyle from './styles/inputStyle';
import TextContainer from './constants/textContainer';

export default class MyApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      bigButtonPointerEvents:true
    }

    this.onBigButtonPressed = this.onBigButtonPressed.bind(this);
    this.onSmallButtonPressed = this.onSmallButtonPressed.bind(this);
  }
  onBigButtonPressed(){
    Alert.alert('Big Now '+!this.state.bigButtonPointerEvents)
    console.log('Big Button Pressed');
  }

  onSmallButtonPressed(){
    Alert.alert('Change Big To  '+this.state.bigButtonPointerEvents);
    console.log('Small Button Pressed');
    if(this.state.bigButtonPointerEvents === true){
      console.log('Big Button will NOT response now');
      this.setState({
        bigButtonPointerEvents:false
      });
      return;
    }else{
      console.log('Big Button will response now');
      this.setState({
        bigButtonPointerEvents:true
      });
    }
  }

  render(){
    return(
      <View style={inputStyle.container}>
        <Text style={inputStyle.sButtonStyle} 
          onPress={this.onSmallButtonPressed}>
        Change Button
        </Text>
        <Text style={inputStyle.bButtonStyle}  
          onPress={this.onBigButtonPressed} pointerEvents={this.state.bigButtonPointerEvents}>
        Check Button
        </Text>
        <TextContainer checkState={this.state.bigButtonPointerEvents}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp',()=>MyApp);