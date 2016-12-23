/**
 * Created by Yooz on 2016/12/22.
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
import TabNavigator from 'react-native-tab-navigator';
var TabHome = require('./../Home/TabHome')
var TabShow = require('./../Show/TabShow')
var TabMine = require('./../Mine/TabMine')
var TabMore = require('./../More/TabMore')

export default class TabMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: "home"
        }
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={{height: 53, overflow: 'hidden'}}>
                {this.renderTabBarItem('home', "首页", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', TabHome,)}
                {this.renderTabBarItem('show', "商家", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', TabShow)}
                {this.renderTabBarItem('mine', "我的", 'icon_tabbar_mine', 'icon_tabbar_mine_selected', TabMine, "1")}
                {this.renderTabBarItem('more', "更多", 'icon_tabbar_misc', 'icon_tabbar_misc_selected', TabMore)}
            </TabNavigator>
        );
    }

    renderTabBarItem(selectedTab, title, renderIcon, renderSelectedIcon, component, badgeText) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image style={styles.img} source={{uri: renderIcon}}/>}
                renderSelectedIcon={() => <Image style={styles.img} source={{uri: renderSelectedIcon}}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
                badgeText={badgeText}>
                <Navigator
                    initialRoute={{name: {title}, component: component}}
                    configureScene={(route, routeStack) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    //route拿到路由!!route.component拿到的是initialRoute下的component
                    //然后把component给渲染成组件并且return出去，并且把navigator设置成属性
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator}  {...route.passProps} />;
                    }}
                />
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    img: {
        height: 28,
        width: 28
    }
});

module.exports = TabMain;
