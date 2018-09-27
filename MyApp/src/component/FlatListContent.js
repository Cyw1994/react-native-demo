import React, { Component } from "react";
import { ActivityIndicator, RefreshControl, FlatList, StyleSheet, Text, View } from "react-native";
import Loading from '../component/Loading';

const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars&page=';
let pageNo = 2;//当前第几页
let totalPage = 5;//总的页数
let itemNo = 0;//item的个数
let fakeDataNum = 10;
const counter = 0;
export default class LoadMoreDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, //第一次需要加载
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
            showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing: false,//下拉控制
        }
        console.log(this.state);
    }

    //网络请求——获取第pageNo页数据
    fetchData(pageNo) {

        //这个是js的访问网络的方法
        fetch(REQUEST_URL + pageNo)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                let i = itemNo;

                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });
                itemNo = i;
                console.log("itemNo: " + itemNo);
                let foot = 0;
                if (pageNo >= totalPage) {
                    foot = 1;//listView底部显示没有更多数据了
                }
                console.log("isRefreshing：" + this.state.isRefreshing);
                // pageNo++;
                this.setState({
                    //复制数据源
                    dataArray: this.state.dataArray.concat(dataBlob),
                    isLoading: false,
                    showFoot: foot,
                    isRefreshing: false, //下拉刷新
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }

    componentDidMount() {
        //请求数据
        this.fetchData(pageNo);
    }

    //加载等待页
    renderLoadingView() {
        return (<Loading />);
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

    //返回itemView
    _renderItemView({ item }) {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>Name : {item.value.name}</Text>
                <Text style={styles.content}>Stars : {item.value.stargazers_count}</Text>
                <Text style={styles.content}>Description : {item.value.description}</Text>
            </View>
        );
    }

    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    _renderFooter() {
        ++counter;
        console.log("_renderFooter the counter " + counter + " times \n showFoot = " + this.state.showFoot + "  pageNo = " + pageNo);  
        switch (this.state.showFoot) {
            case 0:
                return (
                    <View style={styles.footer}>
                        <Text></Text>
                    </View>
                );
                break;
            case 1:
                return (
                    <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                        <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                            没有更多数据了
                    </Text>
                    </View>
                );
                break;
            case 2:
                return (
                    <View style={styles.footer}>
                        <ActivityIndicator />
                        <Text>正在加载更多数据...</Text>
                    </View>
                );
                break;
            default:
                return (
                    <View style={styles.footer}>
                        <Text>获取数据出错</Text>
                    </View>
                );
        }
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

    renderData() {
        return (

            <FlatList
                data={this.state.dataArray}
                renderItem={this._renderItemView}
                ListFooterComponent={this.props._renderFooter ? this.props._renderFooter : this._renderFooter.bind(this)}
                onEndReachedThreshold={0.1}
                onEndReached={this._onEndReached.bind(this)}
                ItemSeparatorComponent={this._separator}
            />

        );
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView();
        }
        //加载数据
        return this.renderData();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    item: {
        marginVertical: 8,
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    footer: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    content: {
        fontSize: 15,
        color: 'black',
    }
});