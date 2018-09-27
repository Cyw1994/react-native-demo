import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    title: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        borderBottomColor: '#333333',
        borderBottomWidth: 2,
        height: 40,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
    },
    titleImg: {
        width: DEVICE_WIDTH,
        height: 32
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    },
    navLeft: {
        alignItems: 'center',
        marginLeft: 10,
    },
    navRight: {
        alignItems: 'center',
        marginRight: 10,
    },
    navIcon: {
        height: 20,
        width: 20,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 5,
        //   marginHorizontal: 10,
    },

    imageSwiper: {
        width: DEVICE_WIDTH - 20,
        height: DEVICE_WIDTH * 40 / 75 - 20,
        borderRadius: 20,
    },
    bannerContainer: {
        backgroundColor: "white"
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: DEVICE_WIDTH * 0.7,
        backgroundColor: '#ededed',
        borderRadius: 5,
        height: 30,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    searchContent: {
        color: '#666',
        fontSize: 14,
    },
    wrapper: {
        width: DEVICE_WIDTH,
    },
    paginationStyle: {
        bottom: 20,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 1,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 1,
    },
    // button list
    btnList: {
        backgroundColor: "white"
    },
    referenceList: {
        marginTop: 10,
        backgroundColor: "white",

    },
    // flat list
    flatList: {
        marginTop: 10,
        backgroundColor: "white"
    },
    flatListTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: "#D3D3D3"
    },
    flatListTitleText: {
        fontSize: 12,
        color: "#D3D3D3",
    },
    flatItem: {
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#D3D3D3",
        backgroundColor: "white"
    },
    flatLeft: {
        width: 80,
        padding: 20,
        marginHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    flatRight: {
        width: DEVICE_WIDTH*0.6,
        justifyContent: "center",
    },
    titleContainer: {
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: 'black',

    },
    itemContent: {
        fontSize: 10,
        color: 'gray',
    },
    onSaleContainer: {
        marginTop: 6,
    },
    onSaleText: {
        padding: 1,
        // borderWidth: 0.5,
        // borderColor: "red",
        fontSize: 11,
        fontWeight: "bold",
        color: "red",
    },
    flatFooter: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        paddingVertical: 5,
    },
    footerText: {
        color: '#D3D3D3',
        fontSize: 12,
        marginVertical: 5
    },
    allowRow: {
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        marginRight: 20,
    }
})

export default styles;