import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Dimensions, FlatList, TouchableOpacity, AlertAndroid } from "react-native";
import { IndicatorViewPager, PagerTitleIndicator } from "rn-viewpager";
import { map, isEmpty, isEqual, isArray, throttle } from "lodash";
import testData from '../constants/ViewPageData.json';

const SCREEN_WIDTH = Dimensions.get("window").width;

class Cascader extends Component {
    constructor(props) {
        super(props);

        // const { selectedItems } = props;
        const data = testData;
        const selectedItems = props.selectedItems ? props.selectedItems : [];
        const len = selectedItems.length;

        this.state = {
            values: this.getValues(data, selectedItems),
            activeIndex: len === 0 ? 0 : len - 1
        };
        console.log("First state vlues " + JSON.stringify(this.state.values));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeIndex !== this.state.activeIndex
            || !isEqual(nextState.values, this.state.values)
            || !isEqual(nextProps.selectedItems, this.props.selectedItems);
    }

    pager: IndicatorViewPager

    getValues(data, selectedItems) {
        const initialValues = [{
            siblings: data,
            label: "",
            value: ""
        }];
        const values = selectedItems.reduce((acc, cur, index) => {
            if (index === 0) {
                const initialScrollIndex = acc[0].siblings.findIndex(({ value }) => value === cur.value);

                if (initialScrollIndex > -1 && !isEmpty(acc[0].siblings[initialScrollIndex])) {
                    acc[0].label = cur.label;
                    acc[0].value = cur.value;
                    acc[0].initialScrollIndex = initialScrollIndex;
                    if (!isEmpty(acc[0].siblings[initialScrollIndex].children)) {
                        acc[0].children = acc[0].siblings[initialScrollIndex].children;
                    }
                }
            } else if (!isEmpty(acc[index - 1]) && isArray(acc[index - 1].children)) {
                const initialScrollIndex = acc[index - 1].children.findIndex(({ value }) => value === cur.value);

                if (initialScrollIndex > -1 && !isEmpty(acc[index - 1].children[initialScrollIndex])) {
                    const item = acc[index - 1].children[initialScrollIndex];

                    acc.push({
                        ...item,
                        initialScrollIndex,
                        siblings: acc[index - 1].children
                    });
                }
            }

            return acc;
        }, initialValues);

        return values;
    }

    _keyExtractor = (item) => item.value

    _onSelect = (index, item) => {
        console.log("Item " + JSON.stringify(item));
        console.log("Index : " + index);
        console.log("this.state.values[`${index}`] : " + JSON.stringify(this.state.values[index].siblings));
        let values = this.state.values.slice(0, index)
            .concat({
                ...item,
                siblings: this.state.values[index].siblings
            });

        if (item.children) {
            values = values.concat({
                siblings: item.children,
                label: "",
                value: ""
            });
        }
        console.log(" 3 : Finnal values are : " + JSON.stringify(values));
        this.setState(prevState => ({
            values,
            activeIndex: prevState.activeIndex === values.length - 1 ? prevState.activeIndex : prevState.activeIndex + 1
        }), () => {
            if (isEmpty(item.children)) {
                this._onFinish(map(this.state.values, ({ value, label }) => ({
                    value,
                    label
                })));
            }

            this.pager.setPage(this.state.activeIndex);
        });
    }

    _renderTitleIndicator() {
        const { values } = this.state;
        let labels = map(values, "label");
        labels = map(labels, label => isEmpty(label) ? "请选择" : label);

        return (
            <PagerTitleIndicator
                // style={styles.indicatorContainer}
                trackScroll={false}
                // itemTextStyle={styles.indicatorText}
                itemStyle={{ width: SCREEN_WIDTH / 3 }}
                selectedItemStyle={{ width: SCREEN_WIDTH / 3 }}
                // selectedItemTextStyle={styles.indicatorSelectedText}
                // selectedBorderStyle={styles.selectedBorderStyle}
                titles={labels} />
        );
    }

    _renderListItem(value, index, { item }) {
        const active = value === item.value;
        return (
            <View>
                {/* <Item onPress={throttle(() => this._onSelect(index, item), EVENT_THROTTLE_MILLISECONDS, { trailing: false })} style={[styles.item, active && styles.selectedItemStyle]}>
          <Left style={{ flex: 6 }}>
            <Text style={[styles.itemTextStyle, active && styles.selectedTextStyle]}>
              {`${item.label}`}
            </Text>
          </Left>
          <Right style={{ flex: 1 }}>
            {active && <Icon name={ICON_DONE} style={styles.checkmarkStyle} />}
          </Right>
        </Item> */}
                <View style={{ height: 30, justifyContent: "center" }}>
                    <TouchableOpacity onPress={throttle(() => this._onSelect(index, item), 1500, { trailing: false })} >
                        <Text>{item.label}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    _onFinish() {
        (selectedItems) => {
            // this.updateVOCDealerValues(selectedItems);
            // doClose();
            AlertAndroid.alert("okay");
        }
    }

    render() {
        const { values } = this.state;
        return (<IndicatorViewPager
            ref={page => {
                this.pager = page;
            }}
            style={{ flex: 1, flexDirection: "column-reverse" }}
            indicator={this._renderTitleIndicator()}
            onPageSelected={({ position }) => {
                this.setState({
                    activeIndex: position
                });
            }}
            initialPage={this.state.activeIndex}>
            {values.map(({ siblings, value, initialScrollIndex }, index) => {
                return (
                    <View style={{ backgroundColor: "white" }} key={index}>
                        <FlatList
                            key={index}
                            keyExtractor={this._keyExtractor}
                            extraData={value}
                            data={siblings}
                            renderItem={this._renderListItem.bind(this, value, index)} />
                    </View>
                );
            })}
        </IndicatorViewPager>
        );
    }
}

Cascader.propTypes = {
    data: PropTypes.array.isRequired,
    selectedItems: PropTypes.array
};

Cascader.defaultProps = {
    selectedItems: [],
};



export default Cascader;
