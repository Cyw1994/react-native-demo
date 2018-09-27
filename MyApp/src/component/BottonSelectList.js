import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";

export default class BottonSelectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: props.data,
            selectedItem: props.selected,
            isSpand: props.isSpand
        };
        this._renderItems = this._renderItems.bind(this);
        // console.log("States:\n" + JSON.stringify(this.state));
        console.log("Props : \n" + JSON.stringify(props));
    }

    render() {

        return (
            <View style={styles.container}>
                {this._renderItems()}
            </View>
        )

    }

    _renderItems() {
        const dataArray = this.state.dataArray;
        const selectedItem = this.state.selectedItem;
        const len = dataArray.length;
        // console.log("len :" + len);
        const renderArray = [];
        // if (this.state.isSpand) {
        //     for (let i = 0; i < len; i++) {
        //         console.log("dataArray[i].value : " + dataArray[i].value);
        //         renderArray.push(
        //             <TouchableOpacity style={[styles.bottons, { backgroundColor: seletedArray.indexOf(i) < 0 ? "gray" : "#da3456" }]}>
        //                 <Text>{dataArray[i].value}</Text>
        //             </TouchableOpacity>
        //         )
        //     }
        // } else {
        //     for (let i = 0; i < 3; i++) {
        //         console.log("dataArray[i].value : " + dataArray[i].value);
        //         renderArray.push(
        //             <TouchableOpacity style={[styles.bottons, { backgroundColor: seletedArray.indexOf(i) < 0 ? "gray" : "#da3456" }]}>
        //                 <Text>{dataArray[i].value}</Text>
        //             </TouchableOpacity>
        //         )
        //     }
        // }
        for (let i = 0; i < len; i++) {
            // console.log("dataArray[i].value : " + dataArray[i].value);
            renderArray.push(
                <TouchableOpacity key={i} style={[styles.bottons, { backgroundColor: selectedItem == i ? "#FFE4E1" : "white" }]} onPress={() => this.props.onSelected(i)}>
                    <Text style={{ color: selectedItem == i ? "#da3456" : "#000", fontWeight: selectedItem == i ? "bold" : "normal", fontSize: selectedItem == i ? 14 : 13 }} >{dataArray[i].value}</Text>
                </TouchableOpacity>
            )
        }
        return renderArray;
    }
}

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: Width,
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#DCDCDC",
    },
    bottons: {
        width: Width / 5,
        height: 26,
        margin: 8,
        paddingVertical: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    }
});