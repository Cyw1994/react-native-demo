import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width,
    backgroundColor: "#F5F5F5"
  },
  topContainer: {
    width: width,
    height: height * 0.3,
    backgroundColor: "#FFE4E1",
  },
  topHeader: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    marginTop: 5

  },
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
  },
  userSign: {
    fontSize: 12,
  },
  userImg: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  userContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
    marginVertical: 5
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    width: width,
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginBottom: 5
  },
  lineLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  lineRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  lineText: {
    fontSize: 14,
    color: "black"
  },
  lineRightImg: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  allowRow: {
    width: 25,
    height: 25
  },
  highLine: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: width,
    backgroundColor: "white",
    marginTop: 10
  },
  bottomText: {
    marginTop: 20,
    fontSize: 12,
    color: "#D3D3D3"
  },
  modalBottom: {
    height: 115,
  },
  modalBottomContainer: {
    height: 115,
    width: width,
    backgroundColor: "#D3D3D3",
  },
  modalTitle: {
    fontSize: 10,
    color: "#C0C0C0"
  },
  modalBottomItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: width,
    backgroundColor: "white",
  },
  modalCenter: {
    height: 300,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
  },
  modalCenterHeader: {
    marginTop: 5,
    height: 30,
    width: 280,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cancelBtn: {
    width: 30,
    height: 30,
    padding: 5,
  },
  cancelImg: {
    width: 20,
    height: 20,
  },
  modalCenterQRCode: {
    marginTop: 15,
    alignItems: "center", 
    flex: 1
  }
});

export default styles;