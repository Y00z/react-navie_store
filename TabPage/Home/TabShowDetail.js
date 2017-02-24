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
    Image
} from 'react-native';

var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')

export default class TabShowDetail extends Component {
    defaultProps={
        detailUri :''
    }


    render() {
        return (
            <WebView
                ref="webview"
                automaticallyAdjustContentInsets={false}
                style={styles.webView}
                source={{uri: this.state.detailUri}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
})

module.exports = TabShowDetail;