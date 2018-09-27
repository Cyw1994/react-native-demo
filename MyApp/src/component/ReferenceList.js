import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class ReferenceList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("width" + width);
        return (
            <View style={styles.container}>
                <View style={styles.itemForm}>
                    <View style={styles.itemRow}>
                        <TouchableOpacity style={[styles.item, { backgroundColor: "#FFCCCC" }]}>
                            <View style={styles.leftText}>
                                <Text style={styles.itemTile}>
                                    超凡蜘蛛侠
                                </Text>
                                <Text style={styles.itemInfo}>
                                    2018年地表最强
                                </Text>
                            </View>
                            <View style={styles.rightImage} >
                                <Image style={styles.itemImg} source={require('../../img/refer1.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.item, { backgroundColor: "#FF6666" }]}>
                            <View style={styles.leftText}>
                                <Text style={styles.itemTile}>
                                    特价优惠
                                </Text>
                                <Text style={styles.itemInfo}>
                                    套餐优惠享不停
                                </Text>
                            </View>
                            <View style={styles.rightImage} >
                                <Image style={styles.itemImg} source={require('../../img/refer2.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: width
    },
    itemForm: {
        marginVertical: 10,
        width: width - 20,
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.5 - 15,
        height: width * 0.3 - 20,
        margin: 5
    },
    leftText: {
        margin: 10,
        justifyContent: "space-around",
    },
    rightImage: {
        justifyContent: "flex-end",
    },
    itemImg: {
        alignSelf: "center",
        width: 60,
        height: 60,
    },
    itemTile: {
        color: "black",
        fontSize: 14,
        opacity: 0.7,
    },
    itemInfo: {
        color: "gray",
        fontSize: 13,
        opacity: 0.7,
    }
});