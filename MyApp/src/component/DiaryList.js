import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';

import styles from '../styles/MCV';

export default class DiaryList extends Component {
    constructor(props){
        super(props);
        this.updateSearchKeyword=this.updateSearchKeyword.bind(this);
    }
    updateSearchKeyword(newWord) {
        this.props.searchKeyword(newWord);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                    <View style={styles.firstRow}>
                        <View style={{borderWidth: 1}}>
                            <TextInput autoCapitalize="node" placeholder="请输入关键字"
                                clearButtonMode="while-editing" onChangeText={this.updateSearchKeyword} style={styles.searchBarTextInput} />
                        </View>
                        <TouchableOpacity onPress={this.props.writeDiary}>
                            <Text style={styles.middleButton}>
                                写日记
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.diaryAbstractList}>
                        <View style={styles.secondRow}>
                            <Image style={styles.moodStyle} source={require('../../img/weather1.png')} />
                            <View style={styles.subViewInReader}>
                                <TouchableOpacity onPress={this.props.selectListItem}>
                                    <Text style={styles.textInReader}>
                                        测试记录标题
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.textInReader}>
                                    测试记录时间
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
        )
    }
}