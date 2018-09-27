import * as React from "react";
import { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";


class SearchBar extends Component {
    render() {
        return (<TouchableOpacity
            style={styles.container}
            onPress={(oEvent) => this.repeatClick(oEvent)}>
            <View style={styles.bar}>
                <Image
                    style={styles.searchIcon}
                    source={require("../../img/search.png")}
                />
                <Text style={styles.searchText}> 搜索 </Text>
            </View>
        </TouchableOpacity>);
    }

    repeatClick(oEvent) {
        this.setState({ waiting: true });
        this.props.onClick(oEvent);
        setTimeout(() => {
            this.setState({ waiting: false });
        }, 2000); //设置的时间间隔
    }
}

const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get('window').width,
        paddingVertical: 5,
        paddingHorizontal: 6,
    },
    bar: {
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        borderRadius: 8,
        width: Dimensions.get('window').width*0.7,
    },
    searchIcon: {
        height: 24,
        width: 24
    },
    searchText: {
        color: "grey",
        fontSize: 14
    }
});

export default SearchBar;
