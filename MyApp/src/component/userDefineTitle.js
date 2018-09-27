import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Title extends Component {
    render() {
      return (
        <View style={{backgroundColor:'white'}}>
          <Text>Welcom to eBlog</Text>
        </View>
      );
    }
}