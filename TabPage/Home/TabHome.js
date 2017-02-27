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
    ScrollView,
    Navigator
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var TabHeader = require('./TabHeader');
var TabTopView = require('./TabTopView');
var TabTopMiddleView = require('./TabTopMiddleView')
var TabShopTopView = require('./TabShopTopView')
var TabShowDetail = require('./TabShowDetail')
var TabHomeDetail = require('./TabHomeDetail')

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TabHeader
                    popToHomeCityDetail={()=>this.pushToHomeCityDetail()}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TabTopView/>
                    <TabTopMiddleView/>
                    <TabShopTopView      //把回调得到的url传递给pushToShowDetail
                        popToHomeView={(url,name) => this.pushToShowDetail(url,name)}
                    />
                </ScrollView>
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


    pushToShowDetail(url,name) {
        this.props.navigator.push({
            component: TabShowDetail,
            passProps: {
                'url': url,
                'name' : name
            },
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,239,245,1.0)'
    }
});

module.exports = Home;
