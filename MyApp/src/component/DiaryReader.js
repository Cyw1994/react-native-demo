import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    Alert
} from 'react-native';

import styles from '../styles/MCV';

export default class DiaryReader extends Component {
    constructor(props) {
        super(props);
        this.returnPressed = this.returnPressed.bind(this);
    }
    returnPressed() {
        Alert.alert(
            '请确认',
            '确定返回日记列表？',
            [
                {text:'确定', onPress: this.props.returnPressed},
                {text:'取消'}
            ]
        )
    };
    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.firstRow}>
                    <TouchableOpacity onPress={this.returnPressed}>
                        <Text style={styles.middleButton}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingPreviousPressed}>
                        <Text style={styles.middleButton}>
                            上一篇
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingNextPressed}>
                        <Text style={styles.middleButton}>
                            下一篇
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondRow}>
                    <Image style={styles.moodStyle} source={this.props.diaryMood}  />
                    <View style={styles.subViewInReader}>
                        <Text style={styles.textInReader}>
                            {this.props.dairyTitle}
                        </Text>
                        <Text style={styles.textInReader}>
                            {this.props.dairyTime}
                        </Text>
                    </View>
                </View>
                <TextInput style={[styles.diaryBodyStyle, {color: 'black'}]}
                    multiline={true}
                    editable={false}
                    value={this.props.diaryBody} />
            </View>
        );
    }
}