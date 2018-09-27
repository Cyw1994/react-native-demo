import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import * as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions, NavigationActions } from 'react-navigation';
import styles from '../styles/UserPageStyle';
import cityCode from '../constants/ChinaCityCode';
import Picker from 'react-native-roll-picker';
import ViewPagerPage from "../component/ViewPagerPage";
import Modal from "react-native-modalbox";
import QRCodeLayout from '../component/QRCodeLayout';

const LogouthNavigation = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'LoginPage' }),
  ]
});

const testUser = {
  name: "叫我阿艺",
  age: 24,
  sex: "Male"
}

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableModal: false
    }
  }

  logout() {
    this.props.navigation.dispatch(LogouthNavigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.topHeader}>
            <TouchableOpacity>
              <Image resizeMode='stretch' source={require("../../img/icon_noti@2x.png")} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.topContent}>
            <Image resizeMode='stretch' source={require("../../img/king-hat.png")} style={{ width: 30, height: 20 }} />
            <Image resizeMode='stretch' source={require("../../img/user.jpg")} style={styles.userImg} />
            <View style={styles.userContentContainer}>
              <Text style={styles.userName}>{testUser.name}</Text>
              <Image resizeMode='stretch' source={require("../../img/beauty_technician_v15.png")} style={{ width: 20, height: 20, marginHorizontal: 10 }} />
            </View>
            <View style={styles.userContentContainer}>
              <Text style={styles.userSign}>简介：这个人很懒，什么都没留下</Text>
              <TouchableOpacity>
                <Image resizeMode='stretch' source={require("../../img/modify.png")} style={{ width: 12, height: 12, marginHorizontal: 10 }} />
              </TouchableOpacity>

            </View>

          </View>
        </View>


        <TouchableOpacity style={styles.line}>
          <View style={styles.lineLeft}>
            <Image resizeMode='stretch' source={require("../../img/my-pocket.png")} style={styles.lineRightImg} />
            <Text style={styles.lineText}>我的钱包</Text>
          </View>
          <View style={styles.lineRight}>
            <Image source={require("../../img/me_arrow@2x.png")} style={styles.allowRow} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.line}>
          <View style={styles.lineLeft}>
            <Image resizeMode='stretch' source={require("../../img/icon_mine_membercard.png")} style={styles.lineRightImg} />
            <Text style={styles.lineText}>我的会员</Text>
          </View>
          <View style={styles.lineRight}>
            <Image source={require("../../img/me_arrow@2x.png")} style={styles.allowRow} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.line}>
          <View style={styles.lineLeft}>
            <Image resizeMode='stretch' source={require("../../img/icon_mine_collection.png")} style={styles.lineRightImg} />
            <Text style={styles.lineText}>我的收藏</Text>
          </View>
          <View style={styles.lineRight}>
            <Image source={require("../../img/me_arrow@2x.png")} style={styles.allowRow} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._showCenterModal.bind(this)} style={styles.line}>
          <View style={styles.lineLeft}>
            <Image resizeMode='stretch' source={require("../../img/icon_mine_friends.png")} style={styles.lineRightImg} />
            <Text style={styles.lineText}>添加好友</Text>
          </View>
          <View style={styles.lineRight}>
            <Image source={require("../../img/qrcode.png")} style={styles.allowRow} />
            <Image source={require("../../img/me_arrow@2x.png")} style={styles.allowRow} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.highLine} >
          <Text style={styles.lineText}>切换账号</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.highLine]} onPress={() => this.refs.modalBottom.open()}>
          <Text style={styles.lineText}>退出登录</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>Provided by Even ©2018 </Text>

        <Modal style={styles.modalBottom} position={"bottom"} ref={"modalBottom"} swipeArea={20}>
          <View style={styles.modalBottomContainer}>
            <View style={[styles.modalBottomItem, { marginBottom: 0.5, height: 30 }]} >
              <Text style={styles.modalTitle}>
                退出后不会删除任何数据，下次登陆依然可以使用本帐号
          </Text>
            </View>
            <TouchableOpacity style={[styles.modalBottomItem, { marginBottom: 5 }]} onPress={this.logout.bind(this)}>
              <Text style={[styles.lineText, { color: "red" }]}>退出登陆</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalBottomItem} onPress={() => this.refs.modalBottom.close()}>
              <Text style={styles.lineText}>取消</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal style={styles.modalCenter}
          position={"center"}
          backdropPressToClose={false}
          // onOpened={() => { this.setState({ disableModal: true }) }}
          // onClosed={() => { this.modalCenter.isDisabled = false }} 
          isDisabled={this.state.disableModal}
          ref={"modalCenter"}
        >
          <View style={styles.modalCenterHeader}>
            <TouchableOpacity style={styles.cancelBtn} onPress={this._closeCenterModal.bind(this)} >
              <Image resizeMode="stretch" source={require("../../img/cancel.png")} style={styles.cancelImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalCenterQRCode}>
            {/* <QRCodeLayout logUrl={require("../../img/user.jpg")} content="扫描我的二维码" /> */}
            <Image resizeMode='stretch' source={require("../../img/my_qrcode.jpg")} style={{ width: 200, height: 200 }} />
            <Text style={[styles.userSign, { marginTop: 10 }]}>
              扫描二维码，添加我为好友
            </Text>
          </View>
        </Modal>
      </View>
    )
  }

  _showCenterModal() {
    this.refs.modalCenter.open();
  }

  _closeCenterModal() {
    this.refs.modalCenter.close();
  }
}

export default connect(
  (state) => ({
    status: state.login.status,
    isSuccess: state.login.isSuccess,
    info: state.login.userInfo,
  })
)(UserPage)