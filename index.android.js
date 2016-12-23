/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
var TabLaunch = require('./TabPage/Main/TabLaunch');

export default class rn_store extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: "启动夜", component: TabLaunch}}
                configureScene={(route, routeStack) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                //route拿到路由!!route.component拿到的是initialRoute下的component
                //然后把component给渲染成组件并且return出去，并且把navigator设置成属性
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator}  {...route.passProps} />;
                }}
            />
        )
    }
}


AppRegistry.registerComponent('rn_store', () => rn_store);
