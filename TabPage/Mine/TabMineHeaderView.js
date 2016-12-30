/**
 * Created by Yooz on 2016/12/26.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
var TabMineItem = require('./TabMineItem');
var TabMineMiddle = require('./TabMineMiddle');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')
var OrderData = require('./OrderData.json')

export default class TabMineHeaderView extends Component {

    render() {
        return (
            <View style={styles.backTopStyle}>
                {this.renderTop()}
                {this.renderButtom()}
            </View>
        );
    }

    renderTop() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
                    <Image style={styles.topImgStyle} source={{uri: 'tx'}}/>
                    <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>电商实战</Text>
                    <Image style={{width: 20, height: 20, marginRight: 10}} source={{uri: 'avatar_vip'}}/>
                </View>
                <Image style={{width: 20, height: 20}} source={{uri: 'icon_cell_rightarrow'}}/>
            </View>
        )
    }

    renderButtom() {
        return (
            <View style={styles.orderStyle}>
                {this.renderAllItem()}
            </View>
        )
    }

    renderAllItem() {
        var itemArr = []
        // let 声明了一个块级域的局部变量
        // for (let i = 0; i < OrderData.length; i++) {
        //     var data = OrderData[i];
        //     itemArr.push(
        //         <TouchableOpacity activeOpacity={0.7} key={i} onPress={() => this._onPress(i)}>
        //             <View style={styles.orderItemViewStyle}>
        //                 <Text style={styles.orderItemTextStyle}>{data.number}</Text>
        //                 <Text style={styles.orderItemTextStyle}>{data.title}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     )
        // }
        OrderData.map((data, i) =>
            itemArr.push(
                <TouchableOpacity activeOpacity={0.7} key={i} onPress={() => {
                    if (i == 0) {
                        alert("0")
                    } else if (i == 1) {
                        alert("1")
                    } else if (i == 2) {
                        alert("2")
                    }
                }}>
                    <View style={styles.orderItemViewStyle}>
                        <Text style={styles.orderItemTextStyle}>{data.number}</Text>
                        <Text style={styles.orderItemTextStyle}>{data.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        )
        return itemArr
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(240,239,245,1.0)'
    },
    backTopStyle: {
        backgroundColor: 'rgba(254,75,32,1.0)',
        width: width
    },
    topImgStyle: {
        height: 78,
        width: 78,
        borderRadius: 50
    },
    orderStyle: {
        flexDirection: 'row',
        width: width,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    orderItemViewStyle: {
        width: (width / 3) + 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: 'white',
    },
    orderItemTextStyle: {
        color: 'white',
        fontSize: 17
    }
});

module.exports = TabMineHeaderView;
