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

export default class TabShopTopView extends Component {
    render() {
        return (
            <View style={{marginTop: 10}}>
                <CommonCell
                    leftImg="gw"
                    leftTitle="购物中心"
                    rightTitle={XMG_Home_D5.tips}
                />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{backgroundColor: 'white', height: 150, marginTop: 2, flexDirection: 'row'}}>
                        {this.renderData()}
                    </View>
                </ScrollView>
            </View>
        );
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
                    alert(i);
                }}>
                    <View style={{margin: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 120, height: 120, borderRadius: 10}} source={{uri: data.img}}/>
                        <Text style={{color: 'black'}}>{data.name}</Text>
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

module.exports = TabShopTopView;