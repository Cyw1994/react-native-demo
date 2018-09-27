import React, { Component } from 'react';
import {
    View,
    Animated,
    TouchableOpacity,
    Image
} from 'react-native';

export default class UpDownIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotateValue: 100
        }
        this.changeRorateValue.bind(this);
    }

    changeRorateValue() {
        this.changeValue += 180;
        Animated.timing(                  // Animate over time
            this.state.rotateValue,            // The animated value to drive
            {
                toValue: this.changeValue,                   // Animate to opacity: 1 (opaque)
                duration: 400,              // Make it take a while
            }
        ).start(
            this.state.rotateValue = this.changeValue
        );
    }

    render() {
        const rotateValue = this.state.rotateValue;
        return (
            <TouchableOpacity onPress={this.changeRorateValue} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (this.props.setBackgroundColor) ? this.props.setBackgroundColor : "white",
                    width: (this.props.setWidth !== 0) ? this.props.setWidth : 60,
                    height: (this.props.setHeight !== 0) ? this.props.setHeight : 20,
                }}
                >
                    <Animated.Image style={
                        {
                            width: 16,
                            height: 9,
                            transform: [{
                                rotate: rotateValue.interpolate({
                                    inputRange: [0, 360],
                                    outputRange: ['0deg', '360deg']
                                })
                            }]
                        }
                    }
                        source={require('../../img/dropdown_arrow@2x.png')}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}