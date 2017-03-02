/**
 * Created by Yooz on 2016/12/23.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window')


export default class TabMoreItem extends Component {
    defaultProps = {
        title: '',
        rightTitle: '',
        isSwitch: false
    }


    constructor(props) {
        super(props)
        this.state = {
            isOn: false
        }
    }

    render() {
        return (
            <TouchableOpacity style={{marginTop:2}} activeOpacity={0.8} onPress={()=>{
                this.setState({
                    isOn :!this.state.isOn
                })
            }}>
                <View style={styles.container}>
                    <Text style={styles.TitleStyle}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return (
                <Switch
                    //滑动块开关是 isOn的值
                    value={this.state.isOn}
                    //改动的滑动块的开关，就是取反isOn。
                    onValueChange={() => this.setState({isOn: !this.state.isOn})}>
                </Switch>
            )
        } else {
            return (
                <View style={{flexDirection: 'row'}}>
                    {this.renderRightTitle()}
                    <Image style={styles.rightImgStyle} source={{uri: 'home_arrow'}}/>
                </View>
            )
        }

    }

    renderRightTitle() {
        return (
            <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TitleStyle: {
        color: 'black',
        fontSize: 18,
        marginLeft: 5
    },
    rightImgStyle: {
        width: 25,
        height: 25
    }
});

module.exports = TabMoreItem;
