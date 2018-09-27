import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class ItemCarousel extends Component {
    _renderPicItem({ item, index }) {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
