import React, { Component } from "react";
import {
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    Switch,
    Slider,
    ToastAndroid,
} from "react-native";
import { MKSwitch, MKTouchable, MKSpinner, TickView } from "react-native-material-kit";
import styles from '../styles/SideMenuPageStyle';

const { width, heihgt } = Dimensions.get('window');


export default class SideMenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            switch1Value: false, //推送
            switch2Value: false, //仅wifi
            switch3Value: false, //流量预警
            sliderValue: 500,
        }
        // this._onSwitch1Changed = this._onSwitchChanged.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerContent}>
                        <Image resizeMode='stretch' source={require("../../img/user.jpg")} style={styles.userImg} />
                        <Text style={styles.headerContent}>叫我阿艺</Text>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <ScrollView style={{ padding: 15 }}>
                        <TouchableOpacity style={styles.listLine}>
                            <Text style={styles.lineContent}>个性主题</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listLine}>
                            <Text style={styles.lineContent}>消息中心</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listLine}>
                            <Text style={styles.lineContent}>免流量服务</Text>
                            <Text style={styles.middot}>&#183;</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.listLine, { marginTop: 30 }]}>
                            <Text style={styles.lineContent}>接收推送</Text>
                            <Switch
                                onTintColor={"#DCDCDC"}
                                thumbTintColor={"#FFFFFF"}
                                //动态改变value
                                value={this.state.switch1Value}
                                //当切换开关室回调此方法
                                onValueChange={(value) => this._onSwitch1Changed(value)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listLine}>
                            <Text style={styles.lineContent}>仅Wifi网络</Text>
                            <Switch
                                onTintColor={"#DCDCDC"}
                                thumbTintColor={"#FFFFFF"}
                                //动态改变value
                                value={this.state.switch2Value}
                                //当切换开关室回调此方法
                                onValueChange={(value) => this._onSwitch2Changed(value)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listLine}>
                            <Text style={styles.lineContent}>流量提醒</Text>
                            <Switch
                                onTintColor={"#DCDCDC"}
                                thumbTintColor={"#FFFFFF"}
                                //动态改变value
                                value={this.state.switch3Value}
                                //当切换开关室回调此方法
                                onValueChange={(value) => this._onSwitch3Changed(value)}
                            />
                        </TouchableOpacity>
                        {
                            this.state.switch3Value
                                ?
                                <View style={styles.silderContainer}>
                                    <Slider
                                        style={{ width: 180 }}
                                        thumbTintColor={"gray"}
                                        maximumTrackTintColor={"#2E8B57"}
                                        minimumValue={500}
                                        step={500}
                                        maximumValue={2000}
                                        value={this.state.sliderValue}
                                        onValueChange={(value) => { this.setState({ sliderValue: value }) }}
                                    />
                                    {/* <Text>{this.state.sliderValue == 500 ? this.state.sliderValue + " M" : this.state.sliderValue / 1000 + " G"}</Text> */}
                                    <View style={styles.silderContent}>
                                        <TouchableOpacity onPress={() => this._setSliderValue(500)}>
                                            <Text style={[styles.sliderContent, { color: this.state.sliderValue == 500 ? "#2E8B57" : "#181513" }]}>0.5M</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this._setSliderValue(1000)}>
                                            <Text style={[styles.sliderContent, { color: this.state.sliderValue == 1000 ? "#2E8B57" : "#181513" }]}>1.0G</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this._setSliderValue(1500)}>
                                            <Text style={[styles.sliderContent, { color: this.state.sliderValue == 1500 ? "#2E8B57" : "#181513" }]}>1.5G</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this._setSliderValue(2000)}>
                                            <Text style={[styles.sliderContent, { color: this.state.sliderValue == 2000 ? "#2E8B57" : "#181513" }]}>2.0G</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                <View />
                        }

                        <TouchableOpacity style={[styles.listLine, { marginTop: 30 }]}>
                            <Text style={styles.lineContent}>帮助与反馈</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listLine}>
                            <Text style={styles.lineContent}>关于</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.line} />
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.bottomItem}>
                        <Image resizeMode='stretch' source={require("../../img/config.png")} style={styles.bottomIcon} />
                        <Text style={styles.bottomContent}>设置</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomItem}>
                        <Image resizeMode='stretch' source={require("../../img/location.png")} style={styles.bottomIcon} />
                        <Text style={styles.bottomContent}>成都</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    _onSwitch1Changed(value) {
        let str = "";
        str = value ? "允许接收推送" : "关闭接收推送";
        ToastAndroid.show(str, ToastAndroid.SHORT);
        this.setState({
            switch1Value: value
        });
    }
    _onSwitch2Changed(value) {
        let str = "";
        str = value ? "仅Wifi加载" : "移动/wifi加载";
        ToastAndroid.show(str, ToastAndroid.SHORT);
        // console.log("Switch2 to " + value);
        this.setState({
            switch2Value: value
        });
    }
    _onSwitch3Changed(value) {
        let str = "";
        str = value ? "开启流量提醒" : "关闭流量提醒";
        ToastAndroid.show(str, ToastAndroid.SHORT);
        // console.log("Switch3 to " + value);
        this.setState({
            switch3Value: value,
            sliderValue: 500
        });
    }

    _setSliderValue(value) {
        console.log("sliderValue changed to " + value)
        this.setState({
            sliderValue: value
        });
    }
}