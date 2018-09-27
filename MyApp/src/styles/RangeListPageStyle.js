import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    scrollLine: {
        height: 2,
        backgroundColor: "#da3456"
    },
    flatHeaderContainer: {
        flexDirection: "row"
    },
    bottonListContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Width - 20,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
    },
    headerTips: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerTipsText: {
        fontSize: 14,
        color: "#000000",
        marginRight: 4
    },
    bottons: {
        width: Width / 5,
        height: 24,
        paddingVertical: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    navIcon: {
        width: 14,
        height: 14
    },
    itemContainer: {
        backgroundColor: "#fff",
        width: Width,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DCDCDC",
        padding: 10,
    },
    itemHeaderContainer: {
        width: Width -20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    userImg: {
        width: 36,
        height: 36,
        borderRadius: 9
    },
    menu: {
        position: "absolute",
        flexDirection: "row",
        right: 15,
        top: 40,
        backgroundColor: "#F5F5F5",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-around",
    },
    shareModa: {
        backgroundColor: "white",
        height: 180,
        width: Width,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    modaLine: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    modaItem: {
        alignItems: "center",
        justifyContent: "center"
    },
    modaPics: {
        width: 35,
        height: 35,
        marginBottom: 3
    },
    modaTitleText: {
        fontSize: 13,
        fontWeight: "bold"
    },
    modaText: {
        fontSize: 12,
    },
    clickMenuLine: {
        height: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    itemPicContainer: {
        marginVertical: 10,
        width: Width - 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    singlePic: {
        width: Width - 20,
        height: 180,
        borderRadius: 5,
    },
    threePics: {
        width: (Width - 40) / 3,
        height: (Width - 0) / 3,
        borderRadius: 2,
    },
    itemTitle: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "bold"
    },
    itemFooterContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemFooterText: {
        fontSize: 12,
        color: "#D3D3D3",
    },
    footerPic: {
        width: 10,
        height: 10,
        tintColor: "#D3D3D3"
    }
});

export default styles;