/**
 * Created by Yooz on 2016/12/21.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                {/*中间*/}
                <Text style={styles.topMoreTextStyle}>更多</Text>

                {/*右边*/}
                <TouchableOpacity style={styles.topRightStyle} activeOpacity={0.6} onPress={()=>{
                    alert("设置");
                }}>
                    <Image style={styles.ToprightImgStyle} source={{uri :'icon_mine_setting' }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBarStyle: {
        height: 50,
        backgroundColor: 'rgba(255,96,0,1.0)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    topMoreTextStyle: {
        color : 'white',
        fontSize : 18
    },
    ToprightStyle: {
        flexDirection: 'row',
    },
    ToprightImgStyle: {
        height: 23,
        width: 23,

    },
    topRightStyle:{
        position : 'absolute',
        right : 20,
        bottom : 15
    }
});

module.exports = More;
