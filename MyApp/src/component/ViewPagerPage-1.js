import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export default class ViewPagerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex : 0
        }
    }
    render() {
        return (
            <IndicatorViewPager
                ref={page => {
                    this.pager = page;
                }}
                style={{ flex: 1, flexDirection: "column-reverse" }}
                indicator={this._renderTitleIndicator()}
                onPageSelected={({ position }) => {
                    console.log("Slected position:" + position);
                    this.setState({
                        activeIndex: position
                    });
                }}
                initialPage={this.state.activeIndex} >
                {/* {values.map(({ siblings, value, initialScrollIndex }, index) => {
                    return (
                        <View style={{ backgroundColor: COLOR_BACKGROUND }} key={index}>
                            <FlatList
                                key={index}
                                keyExtractor={this._keyExtractor}
                                extraData={value}
                                data={siblings}
                                renderItem={this._renderListItem.bind(this, value, index)} />
                        </View>
                    );
                })} */}
                <View style={{ backgroundColor: "white" }}>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                </View>
            </IndicatorViewPager>

        );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    _renderTabIndicator() {
        let tabs = [{
            text: 'Home',
        }, {
            text: 'Message',
        }, {
            text: 'Profile',
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}