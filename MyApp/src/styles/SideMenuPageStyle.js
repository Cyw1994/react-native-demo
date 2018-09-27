import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    headerContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFE4E1",
    },
    headerContent: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImg: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 30,
        marginBottom: 5
    },
    headerContentContainer: {
        marginTop: 5,
        justifyContent: 'center',
    },
    listContainer: {
        flex: 6
    },
    listLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        height: 25,
        alignItems: "center"
    },
    lineContent: {
        fontSize: 14,
        color: "#181513"
    },
    middot: {
        fontSize: 60,
        color: "#DC143C"
    },
    line: {
        height: 1,
        backgroundColor: "#D3D3D3",
        marginHorizontal: 10
    },
    bottomContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    bottomItem: {
        marginHorizontal: 10,
        flexDirection: "row"
    },
    bottomIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 5
    },
    bottomContent: {
        fontSize: 14,
        color: "#181513"
    },
    switch: {
        marginTop: 7,
        marginBottom: 7,
    },
    silderContainer: {
        marginVertical: 5,
        height: 25,
    },
    silderContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 180
    },
    sliderContent: {
        fontSize: 12,
        width: 45,
        textAlign: "center"
    },
})

export default styles;