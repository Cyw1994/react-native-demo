import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  titleImg: {
    alignSelf: "center",
    marginVertical: 25,
    height: Height * 0.2,
    width: Width * 0.6,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 10
  },
  form: {
    alignSelf: "center",
    width: Width*1-10,
    height: Height*0.1,
  },
  inputForm: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
    marginVertical: 10,
  },
  inputTitle: {
    width: 42
  },
  inputBody: {
    width: Width*0.5 -5,
    marginHorizontal: 5,
  },
  checkBtn: {
    borderLeftWidth: 2,
    borderColor: "gray",
    paddingLeft: 5
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
  moreInfo: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkCodeBorder: {
    height: 25,
    width: 25,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  checkCodeText: {
    fontSize: 14,
  }
})

export default styles;