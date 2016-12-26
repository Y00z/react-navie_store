/**
 * Created by Yooz on 2016/12/21.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var TabItem = require('./TabMoreItem')

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 5}}>
                        <TabItem title="扫一扫"/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <TabItem title="省流量模式" isSwitch={true}/>
                        <TabItem title="消息提醒"/>
                        <TabItem title="邀请好友使用"/>
                        <TabItem title="清空缓存" rightTitle="1.9M"/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <TabItem title="意见反驳"/>
                        <TabItem title="问卷调查"/>
                        <TabItem title="支付帮助"/>
                        <TabItem title="网络诊断"/>
                        <TabItem title="关于我们"/>
                        <TabItem title="我要应聘"/>
                    </View>

                    <View style={{marginTop: 10}}>
                        <TabItem title="精品应用"/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                {/*中间*/}
                <Text style={styles.topMoreTextStyle}>更多</Text>

                {/*右边*/}
                <TouchableOpacity style={styles.topRightStyle} activeOpacity={0.6} onPress={() => {
                    alert("设置");
                }}>
                    <Image style={styles.ToprightImgStyle} source={{uri: 'icon_mine_setting'}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,239,245,1.0)'
    },
    navBarStyle: {
        height: 50,
        backgroundColor: 'rgba(255,96,0,1.0)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    topMoreTextStyle: {
        color: 'white',
        fontSize: 18
    },
    ToprightStyle: {
        flexDirection: 'row',
    },
    ToprightImgStyle: {
        height: 23,
        width: 23,
    },
    topRightStyle: {
        position: 'absolute',
        right: 20,
        bottom: 15
    }
});

module.exports = More;
