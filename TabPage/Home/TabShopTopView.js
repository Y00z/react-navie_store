/**
 * Created by Yooz on 2017/2/23.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')
var XMG_Home_D5 = require('./../../LocalData/XMG_Home_D5.json')
var CommonCell = require('./TabTopCommonView');

export default class TabShopTopView extends Component {

    defaultProps = {
        //回调函数
        popToHomeView: null
    }


    render() {
        return (
            <View style={{marginTop: 10}}>
                <CommonCell
                    leftImg="gw"
                    leftTitle="购物中心"
                    rightTitle={XMG_Home_D5.tips}
                    jumpto={XMG_Home_D5.jumpto}
                    callBackClickCell={(url, name) => {
                        this.clickItem(url, name)
                    }}
                />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{backgroundColor: 'white', height: 120, marginTop: 2, flexDirection: 'row'}}>
                        {this.renderData()}
                    </View>
                </ScrollView>
            </View>
        );
    }

    clickItem(url, name) {
        if (this.props.popToHomeView == null) return;
        this.props.popToHomeView(url, name)
    }

    renderData() {
        var itemArr = []
        var showData = XMG_Home_D5.data
        // for (var i = 0; i < showData.length; i++) {
        //     var data = showData[i]
        //     itemArr.push(
        //         <TouchableOpacity key={i} onPress={() => {
        //             alert();
        //         }}>
        //             <View style={{margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        //                 <Image style={{width: 120, height: 120, borderRadius: 10}} source={{uri: data.img}}/>
        //                 <Text>{data.name}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     )
        // }
        showData.map((data, i) =>
            itemArr.push(
                <TouchableOpacity key={i} onPress={() => {
                    this.clickItem(data.detailurl, data.name);
                }}>
                    <View style={{margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 100, height: 80, borderRadius: 10}} source={{uri: data.img}}/>
                        <Text style={{color: 'black'}}>{data.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        )
        return itemArr;
    }
}

module.exports = TabShopTopView;