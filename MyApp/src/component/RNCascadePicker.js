import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// import CascadePicker from 'cascaderpicker';
import areaData from "../constants/areaData.json";

export default class RNCascadePicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CascadePicker
          onSelect={(positon) => {
            console.log("Select " + positon);
          }}
          data={areaData}
          value={[
            {
              "value": "510000",
              "label": "四川省",
            },
            {
              "value": "510100",
              "label": "成都市",
            },
            {
              "value": "510182",
              "label": "彭州市",
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 40,
  },
});