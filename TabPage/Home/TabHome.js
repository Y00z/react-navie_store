/**
 * Created by Yooz on 2016/12/21.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var TabHeader = require('./TabHeader');
var TabTopView = require('./TabTopView');
var TabTopMiddleView = require('./TabTopMiddleView')

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TabHeader />
                <ScrollView>
                    <TabTopView/>
                    <TabTopMiddleView/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,239,245,1.0)'
    }
});

module.exports = Home;
