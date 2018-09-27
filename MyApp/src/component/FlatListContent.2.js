import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    // Button,
    TouchableOpacity
} from 'react-native';

var ITEM_HEIGHT = 100;

export default class FlatListContent extends Component {

    static _flatList;

    render() {
        var data = [];
        for (var i = 0; i < 10; i++) {
            data.push({ key: i, title: i + '' });
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}

                        // numColumns ={5}
                        // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}

                        // horizontal={true}

                        getItemLayout={(data, index) => (
                            { length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 2) * index, index }
                        )}

                        onEndReachedThreshold={5}
                        onEndReached={(info) => {
                            console.warn(info.distanceFromEnd);
                        }}

                        onViewableItemsChanged={(info) => {
                            console.warn(info);
                        }}
                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }
    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{ flex: 1, height: ITEM_HEIGHT, backgroundColor: bgColor }, styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return (
            <TouchableOpacity onPress={() => {
                this._flatList.scrollToOffset({ animated: true, offset: 2000 });
                this._flatList.scrollToEnd();
                // this._flatList.scrollToIndex({viewPosition:0,index:8});
            }}>
                <Text style={[styles.txt, { backgroundColor: 'black' }]}>到底部</Text>
            </TouchableOpacity>
        );
    }

    _footer() {
        return (
            <TouchableOpacity onPress={() => {
                this._flatList.scrollToOffset({ animated: true, offset: 2000 });
                // this._flatList.scrollToEnd();
                this._flatList.scrollToIndex({viewPosition:0,index:8});
            }}>
                <Text style={[styles.txt, { backgroundColor: 'black' }]}>到顶部</Text>
            </TouchableOpacity>
            
        );
    }

    _separator = () => {
        return <View style={{ height: 2, backgroundColor: 'yellow' }} />;
    }
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});