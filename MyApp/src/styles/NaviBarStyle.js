import { StyleSheet, Dimensions } from 'react-native';

let totolWidth = Dimensions.get("window").width;
let naviButtonWidth = totolWidth/4;
let naviButtonHeight = naviButtonWidth * 0.75;

const naviBarStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    naviRow: {
        flexDirection:"row"
    },
    button: {
        width: naviButtonWidth,
        height: naviButtonHeight,
        justifyContent: "center"
    },
    textStyle: {
        fontSize: 20,
        textAlign: "center"
    },
    whatLeft: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: "black"
    }
});

export default naviBarStyle;