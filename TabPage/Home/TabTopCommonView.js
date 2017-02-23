/**
 * Created by Yooz on 2017/1/4.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get('window')
var HomeTopMiddleLeft = require('./../../LocalData/HomeTopMiddleLeft.json')
require('./../../LocalData/HomeTopMiddle.json')

export default class CommonView extends Component {
    defaultProps = {
        title: '',
        titleColor: '',
        subTitle: '',
        icon: '',
        screenWidth:0,
    }

    render() {
        return (
            <View style={[styles.rightTopViewStyle,{width: this.props.screenWidth}]}>
                <View>
                    <Text style={{color: this.props.titleColor}}>{this.props.title}</Text>
                    <Text>{this.props.subTitle}</Text>
                </View>
                <Image style={{width: 80, height: 50,resizeMode: 'contain'}} source={{uri: this.props.icon}}/>
            </View>
        );
    }
}