import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    indicatorContainer: {
        backgroundColor: "white",
        height: 44
    },
    indicatorText: {
        fontSize: 16,
        color: "#252525"
    },
    indicatorSelectedText: {
        fontSize: 16,
        color: "#da3456"
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: "#da3456"
    },
    item: {
        justifyContent: "center",
        height: 44,
        backgroundColor: "#ffffff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ddd"
    },
    itemTextStyle: {
        fontSize: 16,
        color: "#252525",
        marginLeft: 15
    },
    selectedViewStyle: {
        backgroundColor: "#d9d9d9",
    },
    selectedTextStyle: {
        color: "#da3456",
        // fontSize: 16,
    },
});

export default styles;