import React, {
    Component
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    FlatList,
    RefreshControl,
    Image,
    ToastAndroid,
    Dimensions
} from "react-native";
import styles from "../styles/RangeListPageStyle";
import BottonSelectList from "../component/BottonSelectList";
import DataArray from "../constants/RangeListData.json";
// import ClickMenu from "../component/ClickMenu";
import RangeListItem from "../component/RangeListItem";
import Modal from "react-native-modalbox";


const { width, height } = Dimensions.get('window');

const bottonList = [
    {
        key: 0,
        value: "查看最多",
        sortType: "Scan"
    },
    {
        key: 1,
        value: "评论最多",
        sortType: "Comment"
    },
    {
        key: 2,
        value: "好评最多",
        sortType: "Good"
    },
    {
        key: 3,
        value: "综合排序",
        sortType: "Multiple"
    },
];

export default class RangeListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            pageSelected: false,
            bottonSelected: 0,
            tabName: props.pageName,
            spandBottonList: false,
            dataArray: DataArray,
        }
        this._renderItemPics = this._renderItemPics.bind(this);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                    renderItem={this._renderItem.bind(this)}
                    // ItemSeparatorComponent={this._separator}
                    data={this.state.dataArray}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached.bind(this)}
                    scrollEventThrottle={50}
                />
                <Modal style={styles.shareModa} position={"bottom"} ref={"shareModa"} swipeArea={20}>
                    <View style={styles.modaLine}>
                        <Text style={styles.modaTitleText}>分享到</Text>
                    </View>
                    <View style={[styles.modaLine, { borderBottomColor: "#F5F5F5", borderBottomWidth: 0.5 }]}>
                        <TouchableOpacity style={styles.modaItem}>
                            <Image resizeMode='stretch' source={require("../../img/wechat_share.png")} style={styles.modaPics} />
                            <Text style={styles.modaText}></Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.modaItem}>
                            <Image resizeMode='stretch' source={require("../../img/qqweibo.png")} style={styles.modaPics} />
                            <Text style={styles.modaText}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modaItem}>
                            <Image resizeMode='stretch' source={require("../../img/weibo.png")} style={styles.modaPics} />
                            <Text style={styles.modaText}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modaItem}>
                            <Image resizeMode='stretch' source={require("../../img/qq_zone.png")} style={styles.modaPics} />
                            <Text style={styles.modaText}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.modaLine, { justifyContent: "center" }]}>
                        <TouchableOpacity style={styles.modaItem}>
                            <Image resizeMode='stretch' source={require("../../img/warning.png")} style={[styles.modaPics, { width: 30, height: 30, marginHorizontal: 20 }]} />
                            <Text style={styles.modaText}>举报</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modaItem}>
                            <Image resizeMode='stretch' source={require("../../img/unlove.png")} style={[styles.modaPics, { width: 25, height: 25, marginHorizontal: 20 }]} />
                            <Text style={styles.modaText}>关注</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }

    _renderHeader() {
        return (
            // <View style={styles.flatHeaderContainer}>
            //     <View style={styles.bottonListContainer}>
            //         <BottonSelectList data={bottonList} selected={this.state.bottonSelected} isSpand={this.state.spandBottonList} />
            //         {this.state.spandBottonList
            //             ?
            //             <TouchableOpacity style={styles.headerTips} onPress={() => this._unspandBottonList()}>
            //                 <Text style={styles.headerTipsText}>收起</Text>
            //                 <Image source={require('../../img/spand_up.png')} style={styles.navIcon} />
            //             </TouchableOpacity>
            //             :
            //             <TouchableOpacity style={styles.headerTips} onPress={() => this._spandBottonList()}>
            //                 <Text style={styles.headerTipsText}>展开</Text>
            //                 <Image source={require('../../img/spand_down.png')} style={styles.navIcon} />
            //             </TouchableOpacity>
            //         }
            //     </View>
            // </View >
            <View style={styles.flatHeaderContainer}>
                <BottonSelectList data={bottonList} onSelected={this._onSelected.bind(this)} selected={this.state.bottonSelected} isSpand={this.state.spandBottonList} />
            </View>
        );
    }

    _unspandBottonList() {
        this.setState({
            spandBottonList: false
        });
    }

    _onSelected(num) {
        console.log("You Selected " + num);
        this.setState({
            bottonSelected: num
        });
    }

    _spandBottonList() {
        this.setState({
            spandBottonList: true
        });
    }

    _renderFooter() {
        return (
            <View style={styles.flatFooterContainer}>

            </View>
        );
    }

    _renderItem({ item }) {
        return (
            <RangeListItem item={item} test={false} showShareModa={this._showShareModa.bind(this)} />
        );
    }

    _renderItemPics(picArray) {
        let len = picArray.lenght;
        if (len < 3) {
            return <Image source={{ uri: picArray[0] }} style={styles.singlePic} />
        } else {
            let renderArray = [];
            for (let i = 0; i < 3; i++) {
                renderArray.push(
                    <Image source={{ uri: picArray[i] }} style={styles.threePics} />
                );
            }
            return renderArray;
        }
    }

    _showShareModa(flag) {
        if (flag) {
            this.refs.shareModa.open();
        }
    }

    _onEndReached() {
        return;
    }

    _onRefresh() {
        this.setState({
            isRefreshing: false
        });
        ToastAndroid.show("刷新成功", ToastAndroid.SHORT);
    }
}