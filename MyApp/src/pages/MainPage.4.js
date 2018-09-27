import React, { Component } from 'react';
import {
  View,
  Text,
  RefreshControl,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  FlatList,
  Dimensions,
  BackHandler,
  ToastAndroid,
  RefreshControl,
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
import ButtonList from '../component/ButtonList';
import ReferenceList from '../component/ReferenceList';
// import UpDownIcon from '../component/UpDownIcon';
import FlatListContent from '../component/FlatListContent';
import Loading from '../component/Loading';


const { width, height } = Dimensions.get("window");


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
      isTurnDown: false,
      loadMore: false
    }
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

  // 监听物理后退键
  componentWillMount() {
    console.log("Add back litenner")
    BackHandler.addEventListener("hardwareBackPress", this._onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._onBackAndroid);
  }

  _onBackAndroid = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      BackHandler.exitApp();
      return;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show("再按一次退出应用", ToastAndroid.LONG);
    return true
  }

  updateRotate() {
    let result = !this.state.isTurnDown;
    this.setState({
      isTurnDown: result,
      isRefreshing: false
    })
    this.refs.RotateArrow.changeRorateValue();
  }
  

  render() {
    return (
      <ScrollView
        style={styles.container}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.state.isRefreshing}
        //     onRefresh={this._onRefresh.bind(this)}
        //     tintColor="#ff0000"
        //     title="加载中..."
        //     titleColor="#00ff00"
        //     colors={['#ff0000', '#00ff00', '#0000ff']}
        //     progressBackgroundColor="#ffffff" />
        // }
        // onScroll={this._onScroll.bind(this)}
        // scrollEventThrottle={50}
      >

        <CommonHeader
          leftItem={() => this._renderLeftItem()}
          titleItem={() => this._renderTitleItem()}
          rightItem={() => this._renderRightItem()}
        />

        <View style={styles.bannerContainer}>
          {/* {this._renderSwiper()} */}
          <BannerSwiper />
        </View>
        {/* <CommonFooter
          navBarStyle={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          Item={this._renderFootItem.bind(this)}
        /> */}
        <View style={styles.btnList}>
          <ButtonList />
        </View>
        <View style={styles.referenceList}>
          <ReferenceList />
        </View>
        {/* <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={() => {

        }}>
          <Text style={{ flex: 1 }}>获奖项目</Text>
          <Text>{this.state.isTurnDown ? "展开" : "收起"}</Text>
          <UpDownIcon ref='RotateArrow' setBackgroundColor='#999999' setWidth={16} setHeight={11} buttonName='ggsmifaf'
            block={() => {
              this.updateRotate()
            }}
          />
        </TouchableOpacity> */}
        <View style={styles.flatList}>
          <View style={styles.flatListTitle}>
            <Text style={styles.flatListTitleText}>—  猜你喜欢  —</Text>
          </View>
          <FlatListContent />
        </View>
      </ScrollView >
    )
  }

  _onScroll(event) {
    if(this.state.loadMore){
        return;
    }
    let y = event.nativeEvent.contentOffset.y;
    let height = event.nativeEvent.layoutMeasurement.height;
    let contentHeight = event.nativeEvent.contentSize.height;
    console.log('offsetY-->' + y);
    console.log('height-->' + height);
    console.log('contentHeight-->' + contentHeight);
    if(y+height>=contentHeight-20){
        this.setState({
            loadMore:true
        });
    }
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