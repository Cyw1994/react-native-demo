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
  ActivityIndicator
} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import * as counterAction from '../actions/counterAction';
import { connect } from 'react-redux'; // 引入connect函数
import styles from '../styles/MainPageStyle';
import CommonHeader from '../component/CommonHeader';
import CommonFooter from '../component/CommonFooter';
import Swiper from 'react-native-swiper';
import BannerSwiper from '../component/BannerSwiper';
import ButtonList from '../component/ButtonList';
import ReferenceList from '../component/ReferenceList';
// import UpDownIcon from '../component/UpDownIcon';
import FlatListContent from '../component/FlatListContent';
import Loading from '../component/Loading';
import { Data } from '../constants/ReferenceData';

const { width, height } = Dimensions.get("window");
const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars&page=';
let pageNo = 0;//当前第几页
let totalPage = 4;//总的页数
let itemNo = 0;//item的个数
const counter = 0;

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperShow: false,
      loadMore: false,
      isLoading: true, //第一次需要加载
      //网络请求状态
      error: false,
      errorInfo: "",
      dataArray: [],
      showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
      isRefreshing: false,//下拉控制
    }
    this.fetchData = this.fetchData.bind(this);
  }

  //网络请求——获取第pageNo页数据
  fetchData(pageNo) {

    // //这个是js的访问网络的方法
    // fetch(REQUEST_URL + pageNo)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     let data = responseData.items;
    //     let dataBlob = [];
    //     let i = itemNo;

    //     data.map(function (item) {
    //       dataBlob.push({
    //         key: i,
    //         value: item,
    //       })
    //       i++;
    //     });
    //     itemNo = i;
    //     console.log("itemNo: " + itemNo);
    //     let foot = 0;
    //     if (pageNo >= totalPage) {
    //       foot = 1;//listView底部显示没有更多数据了
    //     }
    //     console.log("isRefreshing：" + this.state.isRefreshing);
    //     // pageNo++;
    //     this.setState({
    //       //复制数据源
    //       dataArray: this.state.dataArray.concat(dataBlob),
    //       isLoading: false,
    //       showFoot: foot,
    //       isRefreshing: false, //下拉刷新
    //     });
    //     data = null;
    //     dataBlob = null;
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       error: true,
    //       errorInfo: error
    //     })
    //   })
    //   .done();
    let foot = 0;
    let dataBlob = [];
    if (pageNo >= totalPage) {
      foot = 1;
    } else {
      let tempData = Data[pageNo];
      tempData.map((item) => {
        dataBlob.push({
          key: item.id,
          value: item.data
        });
      });
    }
    this.setState({
      dataArray: this.state.dataArray.concat(dataBlob),
      isLoading: false,
      showFoot: foot,
      isRefreshing: false, //下拉刷新
    });
  }

  //加载失败view
  renderErrorView() {
    return (
      <View style={styles.container}>
        <Text>
          Fail
            </Text>
      </View>
    );
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
    this.fetchData(pageNo);
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

  render() {
    //第一次加载等待的view
    if (this.state.error) {
      //请求失败view
      ToastAndroid.show("请检查网络状况", ToastAndroid.LONG);
    }
    //加载数据
    return this.renderData();
  }

  renderData() {
    return (
      <FlatList
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#ff0000"
            title="加载中..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffffff" />
        }
        ListHeaderComponent={this._renderHeader.bind(this)}
        ListFooterComponent={this._renderFooter.bind(this)}
        renderItem={this._renderItem}
        // ItemSeparatorComponent={this._separator}
        data={this.state.dataArray}
        onEndReachedThreshold={0.1}
        onEndReached={this._onEndReached.bind(this)}
        onScroll={this._onScroll.bind(this)}
        scrollEventThrottle={50}
      />
    )
  }

  _renderHeader() {
    return (
      <View>
        <CommonHeader navigation={this.props.navigation} />
        <View style={styles.bannerContainer}>
          <BannerSwiper />
        </View>
        <View style={styles.btnList}>
          <ButtonList />
        </View>
        <View style={styles.referenceList}>
          <ReferenceList />
        </View>
        <View style={styles.flatList}>
          <View style={styles.flatListTitle}>
            <Text style={styles.flatListTitleText}>—  猜你喜欢  —</Text>
          </View>
          {this._renderLoading()}
        </View>
      </View>
    )
  }

  _renderLoading() {
    if (this.state.isLoading && !this.state.error) {
      return (
        <View style={{ flex: 1, height: height * 0.2 }}><Loading bgColor={"white"} /></View>
      )
    } else {
      return <View />
    }
  }

  //返回itemView
  _renderItem({ item }) {
    let data = item.value;
    console.log("data : " + JSON.stringify(data));
    let key = item.key;
    console.log("keys : " + key);
    return (
      <TouchableOpacity style={styles.flatItem} key={key}>
        <View style={styles.flatLeft}>
          <Image resizeMode='stretch' source={{ uri: data.picUri }} style={{ width: 80, height: 80 }} />
          {/* <Image resizeMode='stretch' source={require("../../img/reference/p1.jpg")} style={{ width: 80, height: 80, }} /> */}
        </View>
        <View style={styles.flatRight}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>{data.title}</Text>
          </View>
          <Text style={styles.itemContent}>月销量：{data.salesVolume}</Text>
          <Text style={styles.itemContent}>{data.content}</Text>
          {
            (data.onSale != null) ?
              <View style={styles.onSaleContainer}>
                <Text style={styles.onSaleText}>满减活动正在火热进行</Text>
              </View>
              :
              <View />
          }

        </View>
        <View style={styles.allowRow}>
        <Image source={require("../../img/me_arrow@2x.png")} style={{ width: 20, height: 20 }} />
        </View>
      </TouchableOpacity>
    );
  }

  _renderFooter() {
    ++counter;
    console.log("_renderFooter the counter " + counter + " times \n showFoot = " + this.state.showFoot + "  pageNo = " + pageNo);
    if (!this.state.isLoading && !this.state.error) {
      switch (this.state.showFoot) {
        case 0:
          return (
            <View style={styles.flatFooter}>
              <Text></Text>
            </View>
          );
        case 1:
          return (
            <View style={styles.flatFooter}>
              <Text style={styles.footerText}>
                —  无更多推荐  —
                  </Text>
            </View>
          );
        case 2:
          return (
            <View style={styles.flatFooter}>
              <ActivityIndicator color="#D3D3D3" size="small" />
              <Text style={[styles.footerText, { marginLeft: 5 }]}>正在加载更多数据...</Text>
            </View>
          );
        default:
          return (
            <View style={styles.flatFooter}>
              <Text style={styles.footerText}>——  获取数据出错  ——</Text>
            </View>
          );
      }
    } else {
      return <View />;
    }
  }

  _onScroll(event) {
    if (this.state.loadMore) {
      return;
    }
    let y = event.nativeEvent.contentOffset.y;
    let height = event.nativeEvent.layoutMeasurement.height;
    let contentHeight = event.nativeEvent.contentSize.height;
    // console.log('offsetY-->' + y);
    // console.log('height-->' + height);
    // console.log('contentHeight-->' + contentHeight);
    if (y + height >= contentHeight - 20) {
      this.setState({
        loadMore: true
      });
    }
  }

  _onRefresh() {
    pageNo = 0;
    this.setState({
      dataArray: []
    });
    this.fetchData(pageNo);
    ToastAndroid.show("刷新成功", ToastAndroid.SHORT);
  }

  _onEndReached() {
    //0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
    //如果是正在加载中或没有更多数据了，则返回
    console.log("Change pageNo : " + pageNo);
    if (this.state.showFoot != 0) {
      return;
    }
    //如果当前页大于或等于总页数，那就是到最后一页了，返回
    if (pageNo >= totalPage) {
      this.setState({ showFoot: 1 });
      return;
    } else {
      pageNo++;
    }
    //底部显示正在加载更多数据
    this.setState({ showFoot: 2 });
    //获取数据
    this.fetchData(pageNo);
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