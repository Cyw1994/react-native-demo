import { AsyncStorage } from 'react-native';
let angryMood = require('../../img/weather1.png');
let peaceMood = require('../../img/weather2.png');
let happyMood = require('../../img/weather3.png');
let sadMood = require('../../img/weather4.png');
let miseryMood = require('../../img/weather5.png');

export default class DataHandler {
    static realDiaryList = [];
    static listIndex = 0;
    static getAllTheDiary() {
        return new Promise(
            function (resolve, reject) {
                AsyncStorage.getAllKeys().then(
                    (Keys) => {
                        if(Keys.length === 0) {
                            let returnValue = {
                                diaryTime: 'No data',
                                diartTitle: 'No data',
                                diaryBody: ''
                            }
                            resolve( returnValue);
                            console.log('resolve 后面的语句还会执行')
                            return; //必须return 来阻止程序继续向下运行
                        }
                        AsyncStorage.multiGet(Keys).then(
                            (reslut) => {
                                let reslutLen = reslut.length;
                                for(let counter=0; counter < reslutLen; counter++){
                                    DataHandler.realDiaryList[counter] = JSON.parse(reslut[counter][1]);
                                }
                                DataHandler.bubleSortDiaryList();
                                if(reslutLen > 0) {
                                    reslutLen --;
                                    DataHandler.listIndex = reslutLen;
                                    let newMoodIcon;
                                    switch(DataHandler.realDiaryList[reslutLen].mood) {
                                        case 2:
                                            newMoodIcon = angryMood;break;
                                        case 3:
                                            newMoodIcon = sadMood;break;
                                        case 4:
                                            newMoodIcon = happyMood;break;
                                        case 5:
                                            newMoodIcon = miseryMood;break;
                                        default:
                                            newMoodIcon = peaceMood; 
                                    }
                                    let newTitle = DataHandler.realDiaryList[reslutLen].title;
                                    let newBody = DataHandler.realDiaryList[reslutLen].body;
                                    let ctime = new Date(DataHandler.realDiaryList[reslutLen].time);
                                    let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) +
                                        "月" + ctime.getDate() + "日  星期" + (ctime.getDay() + 1) + ' ' +
                                        ctime.getHours() + ':' + ctime.getMinutes();
                                    let rValue = {
                                        diaryMood: newMoodIcon,
                                        diryTime: timeString,
                                        diryTitle: newTitle,
                                        diaryBody: newBody
                                    };
                                    resolve(rValue);
                                }else {
                                    let returnValue = {
                                        diaryTime:'no data',
                                        diaryTitle:'no data',
                                        diaryBody:''
                                    }
                                    resolve(returnValue);
                                }
                            }
                        ).catch(
                            (error) => {
                                Alert.alert(
                                    '错误',
                                    error,
                                    [
                                      {text:"确定"}
                                    ]
                                );
                            }
                        )
                    }
                ).catch((err) => {
                    AsyncStorage.clear();
                    let aValue = {
                        diaryTime:'no data',
                        diartTitle:'no data',
                        diaryBody:''
                    };
                    resolve( aValue);
                    Alert.alert(
                        '错误',
                        error,
                        [
                          {text:"确定"}
                        ]
                    );
                })
            }
        );
    }

    static bubleSortDiaryList() {
        let tempObj;
        for (let i = 0; i < DataHandler.realDiaryList.length; i++) {
            for (let j = 1; j < DataHandler.realDiaryList-i;j++) {
                if (DataHandler.realDiaryList[j].index > DataHandler.realDiaryList[i].index){
                    tempObj = DataHandler.realDiaryList[i];
                    DataHandler.realDiaryList[i] = DataHandler.realDiaryList[j];
                    DataHandler.realDiaryList[j] = tempObj;
                }
            }
        }
    }

    static getPreviousDiary() {
        if(DataHandler.listIndex === 0) return null;
        DataHandler.listIndex--;
        let resultLen = DataHandler.listIndex;
        let newMoodIcon;
        switch(DataHandler.realDiaryList[reslutLen].mood) {
            case 2:
                newMoodIcon = angryMood;break;
            case 3:
                newMoodIcon = sadMood;break;
            case 4:
                newMoodIcon = happyMood;break;
            case 5:
                newMoodIcon = miseryMood;break;
            default:
                newMoodIcon = peaceMood; 
        }
        let newTitle = DataHandler.realDiaryList[reslutLen].title;
        let newBody = DataHandler.realDiaryList[reslutLen].body;
        let ctime = new Date(DataHandler.realDiaryList[reslutLen].time);
        let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) +
            "月" + ctime.getDate() + "日  星期" + (ctime.getDay() + 1) + ' ' +
            ctime.getHours() + ':' + ctime.getMinutes();
        let preValue = {
            diaryMood: newMoodIcon,
            diryTime: timeString,
            diryTitle: newTitle,
            diaryBody: newBody
        };
        resolve(preValue);
    }

    static getNextDiary() {
        DataHandler.index++;
        let reslutLen = DataHandler.listIndex;
        let newMoodIcon;
        switch(DataHandler.realDiaryList[reslutLen].mood) {
            case 2:
                newMoodIcon = angryMood;break;
            case 3:
                newMoodIcon = sadMood;break;
            case 4:
                newMoodIcon = happyMood;break;
            case 5:
                newMoodIcon = miseryMood;break;
            default:
                newMoodIcon = peaceMood; 
        }
        let newTitle = DataHandler.realDiaryList[reslutLen].title;
        let newBody = DataHandler.realDiaryList[reslutLen].body;
        let ctime = new Date(DataHandler.realDiaryList[reslutLen].time);
        let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) +
            "月" + ctime.getDate() + "日  星期" + (ctime.getDay() + 1) + ' ' +
            ctime.getHours() + ':' + ctime.getMinutes();
        let nextValue = {
            diaryMood: newMoodIcon,
            diryTime: timeString,
            diryTitle: newTitle,
            diaryBody: newBody
        };
        resolve(nextValue);
    }

    static saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle) {
        return new Promise (function(resolve, reject){
            let ctime = new Date();
            let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) +
            "月" + ctime.getDate() + "日  星期" + (ctime.getDay() + 1) + ' ' +
            ctime.getHours() + ':' + ctime.getMinutes();
            let newDiary = Object();
            newDiary.title = newDiaryTitle;
            newDiary.body = newDiaryBody;
            newDiary.mood = newDiaryMood;
            newDiary.time = ctime;
            newDiary.sectionID = '' + ctime.getFullYear() + "年" + (ctime.getMonth() + 1) + "月";
            newDiary.index = Data.parse(ctime);
            AsyncStorage.setItem("" + newDiary.index, JSON.stringify(newDiary)).then(
                () => {
                    let totalLen = DataHandler.realDiaryList.length;
                    DataHandler.realDiaryList[totalLen] = newDiary;
                    DataHandler.listIndex = totalLen;
                    let newMoodIcon;
                    switch(newDiaryMood) {
                        case 2:
                            newMoodIcon = angryMood;break;
                        case 3:
                            newMoodIcon = sadMood;break;
                        case 4:
                            newMoodIcon = happyMood;break;
                        case 5:
                            newMoodIcon = miseryMood;break;
                        default:
                            newMoodIcon = peaceMood; 
                    }
                    let newValue = {
                        diaryMood: newMoodIcon,
                        diryTime: timeString,
                        diryTitle: newTitle,
                        diaryBody: newBody
                    }
                    resolve(newValue);
                }
            ).catch(
                (error) => {
                    Alert.alert(
                        '错误',
                        error,
                        [
                          {text:"确定"}
                        ]
                    );
                }
            )
           
        });
    }
}
