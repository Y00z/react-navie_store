/**
 * Created by Yooz on 2016/12/27.
 */



import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var TabHomeDetail = require('./TabHomeDetail')

export default class TabHeader extends Component {
    render() {
        return (
            <View>
                {/*头部*/}
                {this.renderNavBar()}
            </View>
        );
    }

    pushToHomeCityDetail() {
        this.props.navigator.push({
            component: TabHomeDetail,
            title: '详情页',
            passProps: {
                data: "武汉"
            }
        })
    }

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    this.pushToHomeCityDetail()
                }}>
                    <Text style={{color: 'white',fontSize : 15}}>武汉</Text>
                </TouchableOpacity>
                <TextInput underlineColorAndroid="transparent" placeholder={"输入商家、品类、商圈"} style={styles.topInputStyle}/>
                <View style={styles.ToprightStyle}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => {
                        alert('点击了铃铛')
                    }}>
                        <Image style={styles.ToprightImgStyle} source={{uri: 'icon_homepage_message'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => {
                        alert('点击了扫描')
                    }}>
                        <Image style={styles.ToprightImgStyle} source={{uri: 'icon_homepage_scan'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBarStyle: {
        height: 50,
        backgroundColor: 'rgba(255,96,0,1.0)',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    topInputStyle: {
        height: 40,
        width: width * 0.70,
        backgroundColor: 'white',
        borderRadius: 18,
    },
    ToprightStyle: {
        flexDirection: 'row',
    },
    ToprightImgStyle: {
        height: 23,
        width: 23,
        marginLeft: 8
    }
});

module.exports = TabHeader;
