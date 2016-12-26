/**
 * Created by Yooz on 2016/12/23.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var MiddleData = require('./MiddleData.json');
var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window')

export default class TabMineMiddle extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem() {
        var itemArr = [];
        for (var i = 0; i < MiddleData.length; i++) {
            var data = MiddleData[i];
            itemArr.push(
                this.InnerView(data.title, data.iconName, i)
            )
        }
        return itemArr
    }

    InnerView(title, iconName, i) {
        return (
            <View key={i} style={styles.itemViewStyle}>
                <Image style={styles.imgStyle} source={{uri: iconName}}/>
                <Text>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 70,
        width: width,
        justifyContent: 'space-between',

    },
    itemViewStyle: {
        alignItems: 'center',
        padding:10,
        marginLeft:10,
        marginRight:10
    },
    imgStyle: {
        width: 45,
        height: 35,
    }

});

module.exports = TabMineMiddle;
