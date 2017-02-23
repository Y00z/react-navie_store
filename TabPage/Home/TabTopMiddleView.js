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
var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get('window')
var HomeTopMiddleLeft = require('./../../LocalData/HomeTopMiddleLeft.json')
var XMG_Home_D4 = require('./../../LocalData/XMG_Home_D4.json')

class CommonView extends Component {
    defaultProps = {
        title: '',
        titleColor: '',
        subTitle: '',
        icon: '',
        screenWidth: 0,
    }

    render() {
        return (
            <View style={[styles.rightTopViewStyle, {width: this.props.screenWidth}]}>
                <View>
                    <Text style={{color: this.props.titleColor}}>{this.props.title}</Text>
                    <Text>{this.props.subTitle}</Text>
                </View>
                <Image style={{width: 80, height: 50, resizeMode: 'contain'}} source={{uri: this.props.icon}}/>
            </View>
        );
    }
}


export default class TabTopMiddleView extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    {/*左边*/}
                    {this.renderLeftView()}
                    {/*右边*/}
                    <View style={{flexDirection: 'column'}}>
                        {this.renderRightView()}
                    </View>
                </View>
                <View style={{marginTop: 10, flexDirection: 'column'}}>
                    {this.renderButtomWidthView()}
                    <View style={{flexDirection: 'row'}}>
                        {this.renderBottomView(1)}
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        {this.renderBottomView(2)}
                    </View>
                </View>
            </View>
        );
    }

    renderButtomWidthView(){
        var itemArr = []
        var dataTop = XMG_Home_D4.dataTop
        for (var i = 0; i < dataTop.length; i++) {
            var data = dataTop[i]
            itemArr.push(
                <CommonView
                    title={data.maintitle}
                    subTitle={data.title}
                    icon={data.img}
                    titleColor={data.typeface_color}
                    screenWidth={width}
                    key={i}
                />
            )
        }
        return itemArr
    }

    renderBottomView(index) {
        var itemArr = []
        var dataBottom = XMG_Home_D4.data
        if(index ==2)
            dataBottom = dataBottom.slice(2,4)
        for (var i = 0; i < dataBottom.length; i++) {
            var data = dataBottom[i]
            itemArr.push(
                <CommonView
                    title={data.maintitle}
                    subTitle={data.title}
                    icon={data.img}
                    titleColor={data.typeface_color}
                    screenWidth={width / 2}
                    key={i}
                />
            )
        }
        return itemArr
    }

    renderLeftView() {
        var leftData = HomeTopMiddleLeft.dataLeft[0]
        return (
            <View style={styles.leftTopViewStyle}>
                <Image style={styles.leftTopImageStyle} source={{uri: leftData.img1}}/>
                <Image style={styles.leftTopImageStyle} source={{uri: leftData.img2}}/>
                <Text style={{fontSize: 15}}>{leftData.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'rgb(55,203,187)'}}>{leftData.price}</Text>
                    <Text style={{color: 'orange', backgroundColor: 'yellow'}}>{leftData.sale}</Text>
                </View>
            </View>
        )
    }

    renderRightView() {
        var itemArr = [];
        var dataRight = HomeTopMiddleLeft.dataRight
        for (var i = 0; i < dataRight.length; i++) {
            var data = dataRight[i]
            itemArr.push(<CommonView
                title={data.title}
                subTitle={data.subTitle}
                icon={data.rightImage}
                titleColor={data.titleColor}
                screenWidth={width / 2}
                key={i}
            />)
        }
        return itemArr
    }

}

const styles = StyleSheet.create({
    container: {},
    leftTopViewStyle: {
        backgroundColor: 'white',
        width: width / 2,
        marginRight: 1,
        height: 158,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftTopImageStyle: {
        width: 130,
        height: 45,
        resizeMode: 'contain'
    },
    rightTopViewStyle: {
        backgroundColor: 'white',
        marginLeft: 1,
        height: 78,
        marginBottom: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    rightTopImageStyle: {
        width: 50,
        height: 50,
        resizeMode: Image.resizeMode.contain
    },
    rightButtomViewStyle: {
        backgroundColor: 'white',
        width: width / 2,
        marginLeft: 1,
        height: 78,
        marginTop: 2
    }
});

module.exports = TabTopMiddleView;
