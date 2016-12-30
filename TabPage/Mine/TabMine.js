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
    ScrollView
} from 'react-native';
var TabMineItem = require('./TabMineItem');
var TabMineMiddle = require('./TabMineMiddle');
var TabMineHeaderView = require('./TabMineHeaderView');

export default class Mine extends Component {
    render() {
        return (
                <ScrollView style={styles.container}>
                <TabMineHeaderView />
                <TabMineItem leftIconName="collect" leftTitle="我的订单" rightTitle="查看全部订单"/>
                <TabMineMiddle />
                <View style={{marginTop: 10}}>
                    <TabMineItem leftIconName="draft" leftTitle="钱包" rightTitle="账户余额:￥100"/>
                    <TabMineItem leftIconName="like" leftTitle="抵用卷" rightTitle="0"/>
                </View>
                <View style={{marginTop: 10}}>
                    <TabMineItem leftIconName="card" leftTitle="积分商城"/>
                </View>
                <View style={{marginTop: 10}}>
                    <TabMineItem leftIconName="new_friend" leftTitle="今日推荐" rightIconName="me_new"/>
                </View>
                <View style={{marginTop: 10}}>
                    <TabMineItem leftIconName="pay" leftTitle="我要合作" rightTitle="轻松开店,招财进宝"/>
                </View>
                </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,239,245,1.0)'
    },
});

module.exports = Mine;
