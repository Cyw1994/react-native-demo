import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

const { DEVICE_WIDTH, DEVICE_HEIGHT } = Dimensions.get('window');

export default class ButtonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnLine}>
                    <TouchableOpacity style={styles.btnItem}>
                        <Image style={styles.btnIcon} source={require("../../img/icon_homepage_movie_category.png")} />
                        <Text style={styles.btnText}>电 影</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnItem}>
                        <Image style={styles.btnIcon} source={require("../../img/icon_homepage_ktv_category.png")} />
                        <Text style={styles.btnText}>KTV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnItem}>
                        <Image style={styles.btnIcon} source={require("../../img/icon_homepage_entertainment_category.png")} />
                        <Text style={styles.btnText}>饮 品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnItem}>
                        <Image style={styles.btnIcon} source={require("../../img/icon_homepage_food_category.png")} />
                        <Text style={styles.btnText}>食 物</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnItem}>
                        <Image style={styles.btnIcon} source={require("../../img/icon_homepage_beauty_category.png")} />
                        <Text style={styles.btnText}>美 妆</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    btnLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        alignItems: "center"
    },
    btnItem: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    btnIcon: {
        width: 50,
        height: 50
    },
    btnText: {
        color: "gray",
        marginTop: 2,
        fontSize: 13
    }

})