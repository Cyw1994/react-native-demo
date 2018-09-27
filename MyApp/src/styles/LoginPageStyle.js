import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  titleImg: {
    marginTop: 20,
    height: Height * 0.2,
    width: Width * 0.6,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 10
  },
  logForm: {
    height: 60,
  },
  inputForm: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: "center",
    width: Width * 0.8,
    height: 60,
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 10
  },
  iconImg: {
    width: 18,
    height: 18
  },
  inputText: {
    fontSize: 14,
    marginHorizontal: 10
  },
  btnForm: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#f5a623',
    backgroundColor: '#343434',
    borderRadius: 5,
    width: Width * 0.3,
    height: 30,
    margin: 15
  },
  btnText: {
    padding: 5,
    fontSize: 14,
    color: 'white',
  },
  clear: {
    alignItems: "center",
    justifyContent: "center",
    width: 28
  },
  moreInfo: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default styles;