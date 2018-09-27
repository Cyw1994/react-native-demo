import React, { Component } from 'react';
import { View, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';

const ImageSource = [
    '../../img/bn4.jpg',
    '../../img/bn4.jpg',
    '../../img/bn4.jpg',
    '../../img/bn4.jpg'
];

const { DEVICE_WIDTH, DEVICE_HEIGHT } = Dimensions.get("window");

export default class BannerSwiper extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/* 实例化ScrollView */}
                <ScrollView style={styles.scrollViewStyle}
                    horizontal={true}   // 水平方向
                    showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                    showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                    pagingEnabled={true}    // 开启分页功能
                >
                    {/* 实例化内部子视图 */}
                    {/* {this.renderItem()} */}
                    <Image resizeMode='stretch' style={styles.itemStyle} source={require('../../img/bn3.jpg')} />
                    <Image key={2} style={styles.itemStyle} source={require('../../img/bn1.jpg')} />
                </ScrollView>


            </View>
        );
    }

    // scrollView子视图
    renderItem() {
        var itemAry = [];

        // 根据json数据实例化视图
        for (var i = 0; i < ImageSource.length; i++) {
            // 取出单个对象
            var item = ImageSource[i];
            // 将子视图放进 itemAry
            itemAry.push(
                // 实例化子视图
                <Image key={i} style={styles.itemStyle} source={require('../../img/bn1.jpg')} />
            )
        }

        // 返回数组
        while(itemAry.length == ImageSource.length){
            console.log(itemAry);
            return itemAry;
        }
        
    }
};

const styles = StyleSheet.create({
    container: {
        height:DEVICE_WIDTH * 40 / 75-20,
    },

    scrollViewStyle: {
        // 背景色
        backgroundColor:'yellow',
        borderRadius: 20,
        // 上边距
        margin:10
    },

    itemStyle: {
        // 尺寸
        width:DEVICE_WIDTH,
        height:200,
    },
});