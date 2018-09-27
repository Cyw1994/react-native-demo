import * as React from "react";
import { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, TextInput } from "react-native";

const historyData = [];

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            isShowTips: false,
            history: []
        }
        this._onTextChange = this._onTextChange.bind(this);
        this._renderSearchTips = this._renderSearchTips.bind(this);
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Image
                            style={styles.searchIcon}
                            source={require("../../img/search.png")}
                        />
                        <TextInput
                            maxLength={15}
                            value={this.state.userInput}
                            ref={input => this.input = input}
                            autoFocus={true}
                            onSubmitEditing={(event) => this._addHistory(event)}
                            style={styles.searchText}
                            placeholder="搜索"
                            onChangeText={(newText) => this._onTextChange(newText)}
                        />
                    </View>
                    <TouchableOpacity style={styles.cancleBar} onPress={() => this.props.navigation.goBack()}><Text style={styles.cancleText}> 取消</Text></TouchableOpacity>
                </View>
                <View style={styles.searcListContainer}>
                    <View style={styles.historyContainer}>
                        <View style={styles.historyTitle}>
                            <Text style={styles.searchListTitle}>搜索历史</Text>
                            <TouchableOpacity onPress={this._clearHistory.bind(this)}>
                                <Image source={require('../../img/delete.png')} resizeMode='stretch' style={styles.deleteImg} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.historyList}>
                            {this._renderHistory()}
                        </View>
                    </View>
                    {this._renderSearchTips()}
                </View>
            </View>
        );
    }

    _onTextChange(newText) {
        if (newText != null && newText != "") {
            this.setState({
                userInput: newText,
                isShowTips: true,
            });
        } else {
            this.setState({
                userInput: "",
                isShowTips: false,
            });
        }
    }

    _renderSearchTips() {
        // console.log("isShowTips: " + this.state.isShowTips);
        // console.log("userInput: " + this.state.userInput);
        if (this.state.isShowTips && this.state.userInput != null) {
            return (
                <View style={styles.tipsContainer}>
                    <Text style={styles.searchListTitle}>您是否在找</Text>
                    <View style={styles.searchList}>
                        {this._renderListItem(this.state.userInput)}
                    </View>
                </View>
            );
        }
    }

    _renderListItem(text) {
        let renderArr = [];
        console.log("list item get text: " + text);
        for (let i = 0; i < 3; i++) {
            renderArr.push(
                <TouchableOpacity style={styles.listItem} key={i}>
                    <Text style={styles.searchResultList}>{text}...</Text>
                    <Text style={styles.searchResultList} >搜索这条信息</Text>
                </TouchableOpacity>
            )
        }
        return renderArr;
    }

    _addHistory(event) {
        let submitText = event.nativeEvent.text
        if (historyData.length < 6) {
            historyData.unshift(submitText);
        } else {
            historyData.pop();
            historyData.unshift(submitText);
        }
        this.setState({
            history: historyData
        })
    }

    _clearHistory() {
        historyData = [];
        this.setState({
            history: historyData
        });
    }

    _renderHistory() {
        let renderData = [];
        let len = historyData.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                let tempData = historyData[i].length > 4 ? historyData[i].substring(0, 4) + "..." : historyData[i];
                renderData.push(
                    <TouchableOpacity onPress={this._searchHistory.bind(this, historyData[i])} style={styles.historyItem} key={i}>
                        <Text style={styles.historyText}>
                            {tempData}
                        </Text>
                    </TouchableOpacity>
                );
            };
        }
        return renderData;
    }

    _searchHistory(searchText) {
        // this.input.value = searchText;
        this.setState({
            userInput: searchText,
            isShowTips: true,
        });
    }

    // onPress={(oEvent) => this.repeatClick(oEvent)}
    repeatClick(oEvent) {
        this.setState({ waiting: true });
        this.props.onClick(oEvent);
        setTimeout(() => {
            this.setState({ waiting: false });
        }, 2000); //设置的时间间隔
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
    },
    deleteImg: {
        width: 15,
        height: 15
    },
    historyContainer: {
        height: 120,
    },
    historyTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    historyItem: {
        backgroundColor: "silver",
        padding: 5,
        marginHorizontal: 4,
        marginVertical: 8,
        width: 80,
        height: 30,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    historyText: {
        fontSize: 14,
        color: "#696969",
        paddingBottom: 2,
    },
    historyList: {
        flexDirection: "row",
        width: Dimensions.get('window').width * 0.9,
        flexWrap: "wrap",
    },
    searcListContainer: {
        margin: 20
    },
    searchListTitle: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    },
    searchList: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 30,
        paddingHorizontal: 10,
        // width: Dimensions.get('window').width*0.9
    },
    searchResultList: {
        fontSize: 14,
        color: "gray"
    },
    searchBar: {
        height: 38,
        width: Dimensions.get('window').width * 0.8,
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 12,
    },
    searchIcon: {
        marginHorizontal: 3,
        height: 24,
        width: 24
    },
    searchText: {
        padding: 5,
        width: Dimensions.get('window').width * 0.7,
        color: "grey",
        fontSize: 14,
        textDecorationLine: "none",
    },
    cancleBar: {
        height: 38,
        // alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginRight: 12,
    },
    cancleText: {
        fontSize: 14,
        color: "grey"
    }
});
