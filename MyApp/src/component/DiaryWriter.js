import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StatusBar
} from 'react-native';
import stylse from '../styles/MCV';

export default class DiaryWriter extends Component {
    constructor(props){
        super(props);
        this.diaryTitle = null;
        this.diaryBody = null;
        this.moodCode = 0;
        this.state = {
            moodText:'选择天气'
        };
        this.returnPressed = this.returnPressed.bind(this);
        this.selectMood = this.selectMood.bind(this);
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

    selectMood() {
        let tempString;
        if(this.moodCode === 5) this.moodCode = 1;
        else this.moodCode = this.moodCode + 1;
        switch(this.moodCode) {
            case 1:
                tempString='今天是阴天多云的天气';break;
            case 2:
                tempString='今天是阴天的天气';break;
            case 3:
                tempString='今天是阴天晴天的天气';break;
            case 4:
                tempString='今天是阴天雨天的天气';break;
            case 5:
                tempString='今天是阴天雪天的天气';break;
        }
        this.setState(() => {
            return {
                moodText: tempString
            }
        });
            
        
    }

    render() {
        return (
            <View style={stylse.container}>
                <StatusBar hidden={true} />
                <View style={stylse.firstRow}>
                    <TouchableOpacity onPress={this.returnPressed}>
                        <Text style={stylse.smallButton}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.selectMood}>
                        <Text style={stylse.longButton}>
                            {this.props.moodText}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={stylse.smallButton} onPress={()=> this.props.saveDiary(this.moodCode, this.diaryBody, this.diaryTitle)}>
                            保存
                        </Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={stylse.titleInputStyle} 
                    placeholder={'输入标题'}
                    onChangeText={(newText) => {this.diaryTitle=text}} />
                <TextInput style={stylse.diaryBodyStyle} multiline={true}
                    placeholder={'输入日记正文'}
                    onChangeText={(text) => this.diaryBody=text} />
            </View>
        );
    }
}