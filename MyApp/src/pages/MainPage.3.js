import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/counterAction';
import { connect } from 'react-redux'; // 引入connect函数
import styles from '../styles/MainPageStyle';
import SearchBar from '../component/SearchBar';
import CommonHeader from '../component/CommonHeader';
import CommonFooter from '../component/CommonFooter';
import Swiper from 'react-native-swiper';
import BannerSwiper from '../component/BannerSwiper';


const { width, height } = Dimensions.get("window");

const LogouthNavigation = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'LoginPage' }),
  ]
});

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      swiperShow: false
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     swiperShow: true
    //   });
    // }, 0)
  }

  _renderSwiper() {
    // if (!this.state.swiperShow) {
    //   return (<View />);
    // } else {
    return (
      <Swiper style={styles.wrapper}
        height={width * 40 / 75}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.imageSwiper} source={require('../../img/bn1.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.imageSwiper} source={require('../../img/bn2.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.imageSwiper} source={require('../../img/bn3.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.imageSwiper} source={require('../../img/bn4.jpg')} />
        </View>
      </Swiper>
    );
    // }
  }

  _onSearch() {
    // this.props.navigation.dispatch(searchNavigation);
    this.props.navigation.navigate('SearchPage')
  }

  // 头部左侧SearchPage
  _renderLeftItem() {
    // return null;
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('SearchPage') }} style={styles.navLeft}>
        <Image source={require('../../img/scan_icon@2x.png')} style={styles.navIcon} />
      </TouchableOpacity>
    )
  }
  // 头部中间
  _renderTitleItem() {
    return (<SearchBar onClick={this._onSearch.bind(this)} />);
  }
  // 头部右侧
  _renderRightItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('SearchPage') }} style={styles.navRight}>
        <Image source={require('../../img/icon_noti_normal@2x.png')} style={styles.navIcon} />
        <Text style={styles.navText}>消息</Text>
      </TouchableOpacity>
    )
  }

  _renderFootItem() {
    return (
      <TouchableOpacity>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <CommonHeader
          leftItem={() => this._renderLeftItem()}
          titleItem={() => this._renderTitleItem()}
          rightItem={() => this._renderRightItem()}
        />

        <View style={{ height: width * 40 / 75 }}>
          {/* {this._renderSwiper()} */}
          <BannerSwiper />
        </View>
        {/* <View>
          <SearchBar onClick={this._onSearch.bind(this)} />
        </View>
        <View>
          {this._renderSwiper.bind(this)}
        </View> */}
        {/* <CommonFooter
          navBarStyle={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          Item={this._renderFootItem.bind(this)}
        /> */}
      </View>
    )
  }
}

export default connect(
  (state) => ({
    count: state.counter.count,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)