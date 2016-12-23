/**
 * Created by Yooz on 2016/12/22.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window')
var TabMain = require('./TabMain');


export default class TabLaunch extends Component {
    render() {
        return (
            <Image style={styles.img} source={{uri: 'bg'}}/>
        );
    }

    //执行耗时操作
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigator.replace({
                component: TabMain,
                title: '主页'
            })
        },10)
    }
}

const styles = StyleSheet.create({
    img:{
        height :height,
        width : width
    }
});

module.exports = TabLaunch;
