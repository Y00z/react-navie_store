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
var HomeGeustYouLike = require('./../../LocalData/HomeGeustYouLike.json')
var CommonCell = require('./TabTopCommonView');

export default class TabHomeYouLike extends Component {

    defaultProps = {
        //回调函数
        popToHomeView: null
    }


    render() {
        return (
            <View style={{marginTop: 10}}>
                <CommonCell
                    leftImg="cnxh"
                    leftTitle="猜你喜欢"
                />
                <View style={{backgroundColor: 'white', marginTop: 2, flexDirection: 'column'}}>
                    {this.renderData()}
                </View>
            </View>
        );
    }

    dealWithImgUrl(url) {
        if (url.search('w.h') == -1)
            return url
        else
            return url.replace('w.h', '120.90')
    }

    renderData() {
        var itemArr = []
        var showData = HomeGeustYouLike.data
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
                    alert(i);
                }}>
                    <View style={{margin: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image style={{width: 80, height: 60, borderRadius: 10}}
                               source={{uri: this.dealWithImgUrl(data.imageUrl)}}/>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: width / 2,
                            height: 60,
                            marginLeft: 5
                        }}>
                            <Text style={{color: 'black', fontSize: 14}}>{data.title}</Text>
                            <Text style={{color: 'gray', fontSize: 10}}>{data.subTitle}</Text>
                            <Text style={{color: 'red', fontSize: 14}}>{data.mainMessage}{data.mainMessage2}</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 60, width: 70}}>
                            <View style={{flexDirection: 'row-reverse'}}>
                                <Text style={{color: 'gray', fontSize: 10}}>{data.topRightInfo}</Text>
                            </View>
                            <View style={{flexDirection: 'row-reverse'}}>
                                <Text style={{color: 'gray', fontSize: 12}}>{data.bottomRightInfo}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        )
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width,
        height: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    boundaryStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

module.exports = TabHomeYouLike;