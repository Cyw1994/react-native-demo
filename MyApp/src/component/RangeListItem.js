import React, {
    Component
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    Image,
    ToastAndroid,
    Dimensions
} from "react-native";
import styles from "../styles/RangeListPageStyle";

export default class RangeListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickMenu: new Animated.Value(0),
            clickMenuFlag: true
        }
        console.log("Props : \n" + JSON.stringify(props));
    }

    startAnimated() {
        Animated.timing(this.state.clickMenu, {
            toValue: 1,
            duration: 300,
            easing: Easing.out(Easing.back())
        }).start(() => {
            this.setState({
                clickMenuFlag: !this.state.clickMenuFlag
            })
        });
    }

    stopAnimated() {
        Animated.timing(this.state.clickMenu, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.quad),
        }).start(() => {
            this.setState({
                clickMenuFlag: !this.state.clickMenuFlag
            })
        });
    }

    render() {
        const { id, title, picUri, writer, scanner, comment, good } = this.props.item;
        let len = picUri.length;
        // console.log("Length : " + len);
        const mOpacity = this.state.clickMenu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        return (
            <View key={id} style={styles.itemContainer}>
                <View style={styles.itemHeaderContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image resizeMode='stretch' source={require("../../img/user2.jpg")} style={styles.userImg} />
                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>  {writer}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        {/* <TouchableOpacity onPress={(e) => {
                            this._onClickMenuPressed(e)
                        }}> */}
                        <TouchableOpacity onPress={() => this.props.showShareModa(true)}>
                            <Image resizeMode='stretch' source={require("../../img/clickMenu.png")} style={{ tintColor: "#D3D3D3", width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemTitleContainer}>
                    <Text style={styles.itemTitle}>{title}</Text>
                </View>
                {len < 3
                    ?
                    <View style={styles.itemPicContainer}>
                        <Image resizeMode='stretch' source={{ uri: picUri[0] }} style={styles.singlePic} />
                    </View>
                    :
                    <View style={styles.itemPicContainer}>
                        <Image source={{ uri: picUri[0] }} style={styles.threePics} />
                        <Image source={{ uri: picUri[1] }} style={styles.threePics} />
                        <Image source={{ uri: picUri[2] }} style={styles.threePics} />
                    </View>
                }

                <View style={styles.itemFooterContainer}>
                    <Image resizeMode='stretch' source={require("../../img/login-see.png")} style={styles.footerPic} />
                    <Text style={styles.itemFooterText}> {scanner}人看过    </Text>
                    <Image resizeMode='stretch' source={require("../../img/comment.png")} style={styles.footerPic} />
                    <Text style={styles.itemFooterText}> {comment}    </Text>
                    <Image resizeMode='stretch' source={require("../../img/pickup.png")} style={styles.footerPic} />
                    <Text style={styles.itemFooterText}> {good}</Text>
                </View>
                {/* {this._renderClickMenu()} */}
            </View>
        )
    }

    __onMenuPressed() {
        console.log("opne moda");
        this.refs.shareModa.open();
    }


    _renderClickMenu() {
        const mWidth = this.state.clickMenu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100]
        });
        const mHeight = this.state.clickMenu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
        });
        const mOpacity = this.state.clickMenu.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        return (
            <Animated.View style={[styles.menu, { width: mWidth, height: mHeight, opacity: mOpacity }]} >
                <TouchableOpacity>
                    <Image resizeMode='stretch' source={require("../../img/warning.png")} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode='stretch' source={require("../../img/unlove.png")} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode='stretch' source={require("../../img/share.png")} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </Animated.View>
        );
    }

    _onClickMenuPressed() {
        if (this.state.clickMenuFlag) {
            this.startAnimated();
        } else {
            this.stopAnimated();
        }
    }

    _closeClickMenu() {
        this.stopAnimated();
    }
}