/**
 * Created by Yooz on 2016/12/23.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window')

export default class TabMineItem extends Component {

    defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightTitle: '',
        rightIconName: ''
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderLeftView()}
                {this.renderRightView()}
            </View>
        );
    }


    renderLeftView() {
        return (
            <View style={styles.leftStyle}>
                <Image source={{uri: this.props.leftIconName}} style={{borderRadius: 30, width: 40, height: 40}}/>
                <Text style={{fontSize: 18, marginLeft: 8}}>{this.props.leftTitle}</Text>
            </View>
        )
    }

    renderRightView() {
        // if (this.props.rightTitle.length == 0) {
        //     return (
        //         <View style={styles.rightStyle}>
        //             <Image source={{uri: this.props.rightIconName}}/>
        //             <Image style={{width: 25, height: 25}} source={{uri: 'home_arrow'}}/>
        //         </View>
        //     )
        // } else {
        //     return (
        //         <View style={styles.rightStyle}>
        //             <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
        //             <Image style={{width: 25, height: 25}} source={{uri: 'home_arrow'}}/>
        //         </View>
        //     )
        // }
        return (
            <View style={styles.rightStyle}>
                {this.renderRightContent()}
                <Image style={{width: 25, height: 25}} source={{uri: 'home_arrow'}}/>
            </View>
        )
    }

    renderRightContent() {
        if (this.props.rightIconName == null && this.props.rightTitle == null) {

        } else {
            if (this.props.rightIconName == null) {
                return (
                    <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
                )
            } else {
                return (                                                //完全显示图片，图片等比例进拉伸；
                    <Image style={{width: 25, height: 25,resizeMode:Image.resizeMode.contain}} source={{uri: this.props.rightIconName}}/>
                )
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        height: 50,
        width: width,
        flexDirection: 'row',
        marginBottom: 2
    },
    leftStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 8,
    },
    rightStyle: {
        alignItems: 'center',
        flexDirection: 'row'
    }
});

module.exports = TabMineItem;
