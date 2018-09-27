import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Dimensions, FlatList, TouchableOpacity, AlertAndroid } from "react-native";
import { IndicatorViewPager, PagerTitleIndicator } from "rn-viewpager";
import { map, isEmpty, isEqual, isArray, throttle, uniq, difference } from "lodash";
import testData from "../constants/ViewPageData2.json";
import styles from "../styles/ViewPagerStyle";

const SCREEN_WIDTH = Dimensions.get("window").width;
let selectedTextArray = [];

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
            value: "",
            id: ""
        }];
        const values = selectedItems.reduce((acc, cur, index) => {
            if (index === 0) {
                const initialScrollIndex = acc[0].siblings.findIndex(({ id }) => id === cur.id);

                if (initialScrollIndex > -1 && !isEmpty(acc[0].siblings[initialScrollIndex])) {
                    acc[0].value = cur.value;
                    acc[0].id = cur.id;
                    acc[0].initialScrollIndex = initialScrollIndex;
                    if (!isEmpty(acc[0].siblings[initialScrollIndex].levelDataList)) {
                        acc[0].levelDataList = acc[0].siblings[initialScrollIndex].levelDataList;
                    }
                }
            } else if (!isEmpty(acc[index - 1]) && isArray(acc[index - 1].levelDataList)) {
                const initialScrollIndex = acc[index - 1].levelDataList.findIndex(({ value }) => value === cur.value);

                if (initialScrollIndex > -1 && !isEmpty(acc[index - 1].levelDataList[initialScrollIndex])) {
                    const item = acc[index - 1].levelDataList[initialScrollIndex];

                    acc.push({
                        ...item,
                        initialScrollIndex,
                        siblings: acc[index - 1].levelDataList
                    });
                }
            }

            return acc;
        }, initialValues);

        return values;
    }

    _keyExtractor = (item) => item.id

    _onSelect = (index, item) => {
        let values = this.state.values.slice(0, index)
            .concat({
                ...item,
                siblings: this.state.values[index].siblings
            });

        if (item.levelDataList) {
            values = values.concat({
                siblings: item.levelDataList,
                value: "",
                id: ""
            });
        }
        this.setState(prevState => ({
            values,
            activeIndex: prevState.activeIndex === values.length - 1 ? prevState.activeIndex : prevState.activeIndex + 1
        }), () => {
            if (isEmpty(item.levelDataList)) {
                // this.props._onFinish(map(this.state.values, ({ id, value }) => ({
                //     id,
                //     value
                // })));
                let selectedText = this._getFinnalText(selectedTextArray);
                alert("id: " + item.id + "\nvalue: " + selectedText);
            }

            this.pager.setPage(this.state.activeIndex);
        });
    }

    _renderTitleIndicator() {
        const { values } = this.state;
        let labels = map(values, "value");
        labels = map(labels, label => isEmpty(label) ? "请选择" : label);
 
        selectedTextArray = labels.join("/");
        console.log("selectedTextArray is : " + selectedTextArray);

        return (
            <PagerTitleIndicator
                style={styles.indicatorContainer}
                trackScroll={false}
                itemTextStyle={styles.indicatorText}
                itemStyle={{ width: SCREEN_WIDTH / 3 }}
                selectedItemStyle={{ width: SCREEN_WIDTH / 3 }}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={labels} />
        );
    }

    _getFinnalText(str){
        return difference(uniq(str.split("/")),["全部"]).join("/");
    }

    _renderListItem(value, index, { item }) {
        const active = value === item.value;
        return (
            // <Item onPress={throttle(() => this._onSelect(index, item), EVENT_THROTTLE_MILLISECONDS, { trailing: false })} style={[styles.item, active && styles.selectedItemStyle]}>
            //     <Left style={{ flex: 6 }}>
            //         <Text style={[styles.itemTextStyle, active && styles.selectedTextStyle]}>
            //             {`${item.label}`}
            //         </Text>
            //     </Left>
            //     <Right style={{ flex: 1 }}>
            //         {active && <Icon name={ICON_DONE} style={styles.checkmarkStyle} />}
            //     </Right>
            // </Item>
            <View style={styles.item}>
                <TouchableOpacity onPress={throttle(() => this._onSelect(index, item), 1500, { trailing: false })} >
                    <Text style={[styles.itemTextStyle, active && styles.selectedTextStyle]}>{item.value}</Text>
                </TouchableOpacity>
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
