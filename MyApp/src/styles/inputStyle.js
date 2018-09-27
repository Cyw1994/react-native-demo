import {
  StyleSheet,
  Dimensions,
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;
let inputStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  textInputStyle: {
    margin: widthOfMargin,
    fontSize: 20,
    backgroundColor: 'gray'
  },

  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },

  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },

  sButtonStyle: {
    textAlign: 'center',
    padding: 3,
    fontSize: 10,
    left: 130,
    top: 50,
    width: 150,
    height: 35,
    backgroundColor: 'gray'
  },

  bButtonStyle: {
    textAlign: 'center',
    padding: 3,
    fontSize: 10,
    left: 130,
    top: 130,
    width: 150,
    height: 40,
    backgroundColor: 'gray'
  }

});

export default inputStyle;