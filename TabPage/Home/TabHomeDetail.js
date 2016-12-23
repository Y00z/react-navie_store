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
                    <Text style={{fontSize: 28}}>{this.props.data}</Text>
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
    }
});

module.exports = TabHomeDetail;
