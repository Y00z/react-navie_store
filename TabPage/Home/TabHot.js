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
var XMG_Home_D6 = require('./../../LocalData/XMG_Home_D6.json')

class CommonCell extends Component {

    defaultProps = {
        leftImg: '',
        leftTitle: '',
        rightTitle: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boundaryStyle}>
                    <Image style={{width: 25, height: 25, marginRight: 5}} source={{uri: this.props.leftImg}}/>
                    <Text>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.boundaryStyle}>
                    <Text>{this.props.rightTitle}</Text>
                    <Image style={{width: 15, height: 15, marginLeft: 5}} source={{uri: 'icon_cell_rightarrow'}}/>
                </View>
            </View>
        )
    }
}

export default class TabHot extends Component {

    defaultProps = {
        //回调函数
        popToHomeView: null
    }


    render() {
        return (
            <View style={{marginTop: 10}}>
                <CommonCell
                    leftImg="rm"
                    leftTitle="热门频道"
                />
                <View style={{marginTop: 2, flexDirection: 'column'}}>
                    <View style={{flexDirection:'row'}}>
                        {this.renderTop()}
                    </View>
                    <View style={{flexDirection:'row',marginTop:2}}>
                        {this.renderBottom()}
                    </View>
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

    renderBottom() {
        var itemArr = []
        var showData = XMG_Home_D6.data[0].resource.cateBottom
        showData.map((data, i) =>
            itemArr.push(
                <TouchableOpacity key={i} onPress={() => {
                    this.clickItem(data.target,data.mainTitle);
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: width / 4-4,
                        backgroundColor: 'white',
                        marginLeft: 2
                    }}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{color: 'black', fontSize: 14}}>{data.mainTitle}</Text>
                            <Text style={{color: 'gray', fontSize: 13}}>{data.deputyTitle}</Text>
                            <Image style={{width: 80, height: 60, borderRadius: 10}}
                                   source={{uri: this.dealWithImgUrl(data.entranceImgUrl)}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        )
        return itemArr;
    }

    renderTop() {
        var itemArr = []
        var showData = XMG_Home_D6.data[0].resource.cateArea
        showData.map((data, i) =>
            itemArr.push(
                <TouchableOpacity key={i} onPress={() => {
                    this.clickItem(data.target,data.mainTitle);
                }}>
                    <View style={styles.topItemSytem}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{color: 'black', fontSize: 14}}>{data.mainTitle}</Text>
                            <Text style={{color: 'gray', fontSize: 13}}>{data.deputyTitle}</Text>
                            <Text style={{
                                color: 'white', fontSize: 14, backgroundColor: 'red', borderRadius: 10, width: 37,
                                textAlign: 'center'
                            }}>{data.otherDesc}</Text>
                        </View>
                        <Image style={{width: 80, height: 60, borderRadius: 10}}
                               source={{uri: this.dealWithImgUrl(data.entranceImgUrl)}}/>
                    </View>
                </TouchableOpacity>
            )
        )
        return itemArr;
    }

    clickItem(url,name) {
        if (url == null) return;
        this.props.popToHomeView(url,name)
    }

    dealWithImgUrl(url) {
        if (url.search('w.h') == -1)
            return url
        else
            return url.replace('w.h', '120.90')
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
    topItemSytem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 2,
        backgroundColor: 'white',
        marginLeft: 2,
        alignItems: 'center',
        padding: 5
    }
})

module.exports = TabHot;