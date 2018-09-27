import React, { Component } from 'react';
import { View, Animated, Dimensions, Easing, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default class ClickMenu extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            menu: new Animated.Value(0),
            flag: true
        };
    }

    startAnimated() {
        Animated.timing(this.state.menu, {
            toValue: 1,
            duration: 300,
            easing: Easing.out(Easing.back())
        }).start(() => {
            this.setState({
                flag: !this.state.flag
            })
        });
    }

    stopAnimated() {
        Animated.timing(this.state.menu, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.quad),
        }).start(() => {
            this.setState({
                flag: !this.state.flag
            })
        });
    }

    onPress(e) {
        if (this.state.flag) {
            this.startAnimated();
        } else {
            this.stopAnimated();
        }
    }

    close() {
        this.stopAnimated();
    }

    render() {

        const mWidth = this.state.menu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 130]
        });
        const mHeight = this.state.menu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200]
        });
        const mOpacity = this.state.menu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.leftView}
                        onPress={(e) => {
                            this.onPress(e)
                        }}>

                        <Text style={styles.text}>更多</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={[styles.sanjiao,
                {
                    opacity: mOpacity
                }]}>

                </Animated.View>
                <Animated.View
                    style={[styles.menu,
                    {
                        width: mWidth,
                        height: mHeight, opacity: mOpacity
                    }]}
                >
                </Animated.View>
                <Animated.View
                    style={[styles.back, { opacity: mOpacity }]}>
                    <TouchableOpacity
                        onPress={() => { this.close() }}
                        activeOpacity={1}
                        style={{ flex: 1 }}
                    />
                </Animated.View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        height: 60,
        backgroundColor: 'red',
    },
    leftView: {
        position: 'absolute',
        right: 20,
        bottom: 0,
        width: 30,
        height: 30,
        borderColor: 'transparent'

    },
    text: {
        color: '#fff'
    },
    menu: {
        position: 'absolute',
        right: 5,
        top: 64,
        backgroundColor: '#fff',
        borderRadius: 5,
        zIndex: 3,
        borderColor: 'transparent'
    },

    back: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    sanjiao: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderColor: 'transparent',
        borderBottomColor: '#fff',
        position: 'absolute',
        top: 45,
        right: 25,
        zIndex: 2,
    }
});
