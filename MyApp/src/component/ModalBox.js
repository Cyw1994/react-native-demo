import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import Modal from "react-native-modalbox";

const { width, height } = Dimensions.get("window");
export default class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        }
    }

    onClose() {
        console.log("Modal is Colosed");
    }

    onOpen() {
        console.log("Modal is Opened");
    }

    onClosingState(state) {
        console.log("the open/close of the swipeToClose just changed");
    }

    renderList() {
        let list = [];
        for (let i = 0; i < 5; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }
        return list;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.refs.modal1.open()} style={styles.btn}>
                    <Text>Basic Modal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.refs.modal2.open()} style={styles.btn}>
                    <Text>Position Top</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.refs.modal3.open()} style={styles.btn}>
                    <Text>Position Center + backdrop + disable</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.refs.modal4.open()} style={styles.btn}>
                    <Text>Position bottom + ScrollView</Text>
                </TouchableOpacity>
                <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"modal1"}
                    backdrop={true}
                    swipeToClose={this.state.swipeToClose}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}>
                    <Text style={styles.text}>Basic modal</Text>
                    <TouchableOpacity onPress={() => this.setState({ swipeToClose: !this.state.swipeToClose })} style={styles.btn}>
                        <Text>>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Text>
                    </TouchableOpacity>
                </Modal>

                <Modal style={[styles.modal, styles.modal2]} backdrop={false} position={"top"} ref={"modal2"}>
                    <Text style={[styles.text, { color: "white" }]}>Modal on top</Text>
                </Modal>

                <Modal style={[styles.modal, styles.modal3]} backdropOpacity={0.7} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Modal centered</Text>
                    <TouchableOpacity onPress={() => this.setState({ isDisabled: !this.state.isDisabled })} style={styles.btn}>
                        <Text>Disable ({this.state.isDisabled ? "true" : "false"})</Text>
                    </TouchableOpacity>
                </Modal>

                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"} swipeArea={20}>
                    <ScrollView>
                        <View style={{ width: width, paddingLeft: 10 }}>
                            {this.renderList()}
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 50,
        flex: 1
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width*0.8
    },

    modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },

    modal3: {
        height: 300,
        width: 300
    },

    modal4: {
        height: height*0.2
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },

    text: {
        color: "black",
        fontSize: 22
    }

});
