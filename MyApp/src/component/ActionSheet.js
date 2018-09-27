import React, { Component } from 'react';
import {
    Modal,
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import styles from '../styles/LoginPageStyle';

export default class ActionSheet extends Component {
    constructor(props) {
        super(props);
        this.tanslatelY = 150;
        this.state = {
            visible: false,
            sheetAnim: new Animated.Value(this.tanslatelY)
        }
        this.cancle = this.cancle.bind(this);
    }

    cancle() {
        this.hide();
    }

    _renderTitle() {
        const { title, titleStyle } = this.props;
        if (!title) {
            return null;
        }
        if (React.isValidElement(title)) {
            retun(
                <View>{title}</View>
            );
        }
        return (
            <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        )
    }

    _renderContainer() {
        const { content } = this.props;
        return (
            <View style={styles.container}>
                {content}
            </View>
        );
    }

    render() {
        const { visible, sheetAnim } = this.state;
        return (
            <Modal
                visible={visible}
                transparent={true}
                animationType="none"
                onRequestClose={this.cancel}
            >
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.overlay} onPress={this.cancel}></TouchableOpacity>
                    <Animated.View
                        style={[styles.bd, { height: this.translateY, transform: [{ translateY: sheetAnim }] }]}>
                        {this._renderTitle()}
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {this._renderContainer()}
                        </ScrollView>
                    </Animated.View>
                </View>
            </Modal>
        );
    }
}

const sytles = StyleSheet.create({
    container: {
        flex: 1
    },

});