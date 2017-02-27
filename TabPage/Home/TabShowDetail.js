/**
 * Created by Yooz on 2017/2/24.
 */


/**
 * Created by Yooz on 2017/2/23.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    WebView,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')

export default class TabShowDetail extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigator.pop();
                    }}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={{uri: 'navigationbar_arrow_up'}}/>
                        <Text style={{fontSize: 18, color: 'white'}}>首页</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, color: 'black'}}>{this.props.name}</Text>
                    <Image style={{width: 30, height: 30}} source={{uri: 'icon_shop_search'}}/>
                </View>
                <WebView
                    ref="webview"
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,96,0,1.0)',
        width: width,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
})

module.exports = TabShowDetail;