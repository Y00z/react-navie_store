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

class CommonCell extends Component {

    defaultProps = {
        leftImg: '',
        leftTitle: '',
        rightTitle: '',
        jumpto:'',
        callBackClickCell: null
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.clickItem(this.props.jumpto,this.props.rightTitle)
            }}>
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
            </TouchableOpacity>
        )
    }


    clickItem(url, name) {
        if (this.props.callBackClickCell == null) return
        this.props.callBackClickCell(url, name)
    }
}

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
                    callBackClickCell={(url,name)=>{this.clickItem(url,name)}}
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

    clickItem(url, name) {
        if (url == null) return;
        this.props.popToHomeView(url, name)
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

module.exports = TabShopTopView;