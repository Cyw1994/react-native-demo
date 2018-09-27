import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    Dimensions
} from 'react-native';

let {windowWidth, windowHeight} = Dimensions.get('window');

export default class AlertView extends Component {
    // 静态属性， 可以通过 this.props.alertTitle 传入
    // static propTypes = {
    //     alertTitle: PropTypes.string,
    //     alertContent: PropTypes.string,
    //     cancel: PropTypes.string,
    //     confirm: PropTypes.string
    // }

    constructor(props){
        super(props);
        this.state = ({
            isAlert: false,
            confirm: "确定",
            cancel: "取消"
        });
    }

    render() {
        if (!this.state.isAlert) {
            return null;
        } else {
            return(
                <Modal  visible={this.state.isAlert}
                //  显示是的动画默认 None
                //  从下往上互动 Slide
                //  慢慢显示 Fade
                    animationType={'fade'}
                    onRequestClose={() => {}} >
                    <View style={styles.containerStyle}>
                        {this.renderMongoliaView()}{this.renderAlertView()}
                    </View>
                </Modal>
            )
        }
    }

    // 蒙层背景
    renderMongoliaView(){
        return(
            <TouchableOpacity style={styles.bgContainViewStyle}
                onPress={() => this.hideAlertView()} >
                <View></View>
            </TouchableOpacity>
        )
    }

    // 绘制Alert视图
    renderAlertView(){
        return(
            <View style={styles.alertViewStyle}>
                <View style={styles.titleContainerStyle}>
                    <Text style={styles.titleStyle}>
                        {this.props.alertTitle}
                    </Text>
                </View>
                <View style={styles.contentContainerStyle}>
                    <Text style={styles.contentStyle}>
                        {this.props.alertContent}
                    </Text>
                </View>
                <View style={styles.btnContainerStyle}>
                    <TouchableOpacity onPress={() => {
                        this.dissmissDialog(0);
                        this.dissmissDialog();
                        this.props.confirmClick?this.props.confirmClick():null
                    }} style={styles.btnStyle}>
                        <Text style={{fontSize:16, color:"#157efb", fontWeight:"700"}}>
                            {this.props.confirm}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.verticalLineStyle}>

                    <TouchableOpacity onPress={() => {
                        this.dissmissDialog(0);
                        this.dissmissDialog();
                        this.props.cancelClick ? this.props.cancelClick() : null
                    }} style={styles.btnStyle}>
                        <Text style={{fontSize: 16, color: '#157efb'}}>
                            {this.props.cancel}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    hideAlertView() {
        this.setState({
            isAlert: false
        });
    }

    showDialog() {
        this.setState({
            isAlert: true
        });
    }

    dissmissDialog(delay) {
        let duration = delay;
        this.timer = setTimeout(() => {
            this.setState({
                isAlert: false
            });
            this.timer && clearTimeout(this.timer);
        },duration*1000);
    }

}

const styles = StyleSheet.create({
    bgContainViewStyle: {
        height: windowHeight,
        width: windowWidth,
        position: 'absolute',
        opacity: 0.4,
        backgroundColor: 'rgb(0,0,0)',
    },
    containerStyle: {
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
    },
    alertViewStyle: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        height: 130,
        marginLeft: 50,
        marginRight: 50,
        borderColor: 'lightgrey',
    },
    titleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        height: 30
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '900'
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    contentStyle: {
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 14,
    },
    horizontalLineStyle: {
        height: 0.5,
        backgroundColor: 'lightgrey'
    },
    btnContainerStyle: {
        flexDirection: 'row',
        width: windowWidth - 100,
        height: 48
    },
    verticalLineStyle: {
        height: 50,
        backgroundColor: 'lightgrey',
        width: 0.5
    },
    btnStyle: {
        flex: 1,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center'
    },

});