/**
 * Created by Yooz on 2016/12/22.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');


export default class TabHomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 28}}>测试携带数据跳转</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigator.pop();
                }}>
                    <Text style={{
                        fontSize: 28, justifyContent: 'center',
                        alignItems: 'center'
                    }}>{this.props.data}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarStyle: {
        height: 50,
        backgroundColor: 'rgba(255,96,0,1.0)',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    topInputStyle: {
        height: 35,
        width: width * 0.70,
        backgroundColor: 'white',
        borderRadius: 35,
    },
    ToprightStyle: {
        flexDirection: 'row',
    },
    ToprightImgStyle: {
        height: 23,
        width: 23,
        marginLeft: 8
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = TabHomeDetail;
