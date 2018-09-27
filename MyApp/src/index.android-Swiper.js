import React, { Component } from 'react';
import { 

  Text,
  StyleSheet,
  View,
  Image,
  Dimensions

} from 'react-native';
import Swiper from 'react-native-swiper';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class MyApp extends Component {
  render() {
    return (
      <View>
      <Swiper style={styles.wrapper} horizontal={true} autoplay={true}>
          <View style={styles.slide1} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/jay.jpg')} />
          </View>
          <View style={styles.slide1} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/jay.jpg')} />
          </View>
          <View style={styles.slide1} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/jay.jpg')} />
          </View>
          <View style={styles.slide1} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='cover' style={styles.imageSwiper} source={require('../img/jay.jpg')} />
          </View>
        </Swiper>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor:'black'
  },
  red: {
    color: 'red',
    backgroundColor:'yellow',
  },
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  imageSwiper: {
    width:Dimensions.get('window').width,
    height:150
  },
});


export default MyApp;