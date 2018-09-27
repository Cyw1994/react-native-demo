import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

const ImageSource = [
    '../../img/bn4.jpg',
    '../../img/bn4.jpg',
    '../../img/bn4.jpg',
    '../../img/bn4.jpg'
];
const ImageDatas = [
    <Image key={0} resizeMode='stretch' style={{ width: width - 30, height: width * 40 / 75 - 30, borderRadius: 20, margin: 5 }} source={require('../../img/bn1.jpg')} />,
    <Image key={1} resizeMode='stretch' style={{ width: width - 30, height: width * 40 / 75 - 30, borderRadius: 20, margin: 5 }} source={require('../../img/bn2.jpg')} />,
    <Image key={2} resizeMode='stretch' style={{ width: width - 30, height: width * 40 / 75 - 30, borderRadius: 20, margin: 5 }} source={require('../../img/bn3.jpg')} />,
    <Image key={3} resizeMode='stretch' style={{ width: width - 30, height: width * 40 / 75 - 30, borderRadius: 20, margin: 5 }} source={require('../../img/bn4.jpg')} />
]

// 引入Dimensions库
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

// 视图
export default class BannerSwiper extends Component {
    // 先初始化页码,确定初始化后显示哪个页面
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
        this.renderItem.bind(this);
        this.renderPagingIndicator.bind(this);
        this.autoPlay.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 实例化ScrollView */}
                <ScrollView
                    style={styles.scrollViewStyle}
                    ref="BannerSwiper"
                    horizontal={true}   // 水平方向
                    showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                    showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                    pagingEnabled={true}    // 开启分页功能
                    onMomentumScrollEnd={this.onAnimationEnd.bind(this)}   // 当一帧滚动完毕的时候调用
                >
                    {/* 实例化内部子视图 */}
                    {/* {this.renderItem()} */}
                    <Image key={0} resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn1.jpg')} />
                    <Image key={1} resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn2.jpg')} />
                    <Image key={2} resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn3.jpg')} />
                    <Image key={3} resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn4.jpg')} />
                </ScrollView>

                {/* 实例化分页指示器 */}
                <View style={styles.pagingIndicatorStyle}>
                    {this.renderPagingIndicator()}
                </View>
            </View>
        );
    }

    componentWillMount() {
        this.state.timer =  setInterval(() => {
            this.autoPlay();
        }, 7 * 1000);
    }

    componentWillUnmount() {
        clearInterval( this.state.timer );
    }

    // 自动循环滚动
    async autoPlay() {
        let currentPage = this.state.currentPage;
        let maxPage = ImageSource.length - 1;
        if (currentPage < maxPage) {
            var offSetX = (currentPage + 1) * width ;
            await this.refs.BannerSwiper.scrollTo({ x: offSetX, y: 0, animated: true });
            this.setState({
                currentPage: currentPage + 1
            });
        } else if (currentPage == maxPage) {
            var offSetX = -((maxPage = 1) * width);
            await this.refs.BannerSwiper.scrollTo({ x: offSetX, y: 0, animated: true });
            this.setState({
                currentPage: 0
            });
        }
    }

    // 监听滚动
    onAnimationEnd(e) {
        // 求出水平方向上的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        // 计算当前页码
        var currentPage = Math.ceil(offSetX / width);
        console.log("currentPage" + currentPage);
        // 重新绘制UI
        this.setState({
            currentPage: currentPage
        });
    }

    // 分页指示器
    renderPagingIndicator() {
        var itemAry = [], autoColor;

        // 获取json中图片
        // var imgAry = imageData.data;

        // 根据json数据实例化视图
        for (var i = 0; i < ImageSource.length; i++) {
            // 取出单个对象
            // var item = imgAry[i];

            // 跟随当前页改变对应 点 的颜色
            autoColor = (this.state.currentPage === i) ? { color: 'orange' } : { color: 'white' }

            // 将子视图放进 itemAry
            itemAry.push(
                // 实例化视图
                <Text key={i} style={[{ fontSize: 30, marginHorizontal: 3, marginBottom: 5 }, autoColor]}>&#95;</Text>
            )
        }

        // 返回数组
        return itemAry;
    }

    // scrollView子视图
    renderItem() {
        var itemAry = [];

        // 获取json中图片
        // var imgAry = imageData.data;

        // 根据json数据实例化视图
        for (var i = 0; i < ImageSource.length; i++) {
            // 取出单个对象
            // var item = imgAry[i];
            // 将子视图放进 itemAry
            // if (i % 2 == 0) {
            //     itemAry.push(
            //         // 实例化子视图
            //         <Image key={i} resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn1.jpg')} />
            //     )
            // } else {
            //     itemAry.push(
            //         // 实例化子视图
            //         <Image key={i} resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn2.jpg')} />
            //     )
            // }
            let url = "'" + ImageSource[i] + "'";
            console.log(url);
            itemAry.push(
                // 实例化子视图
                <Image key={i} resizeMode='stretch' style={styles.itemStyle} source={require(url)} />
                // ImageDatas[i],
            )
        }

        // 返回数组
        return itemAry;
    }
}

// 样式
var styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },

    scrollViewStyle: {
        // 背景色
        width: width,
        height: (width * 40 / 75) * 0.8,
        // 上边距
    },

    itemStyle: {
        // 尺寸
        width: width,
        height: (width * 40 / 75) * 0.8,
        // 图片等比例拉伸
    },

    pagingIndicatorStyle: {
        // 背景色(使背景色为全透明)
        backgroundColor: 'rgba(255,255,255,0.0)',
        // 尺寸
        width: width,
        // 主轴方向与对齐方式
        flexDirection: 'row',
        justifyContent: 'center',
        // 绝对定位,使页码指示器盖在scrollView上面
        position: 'absolute',
        bottom: 0
    }
});
