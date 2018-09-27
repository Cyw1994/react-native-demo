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
    }
});

export default styles;