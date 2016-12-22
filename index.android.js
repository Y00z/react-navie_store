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
import TabNavigator from 'react-native-tab-navigator';
var TabHome = require('./TabPage/Home/TabHome')
var TabShow = require('./TabPage/Show/TabShow')
var TabMine = require('./TabPage/Mine/TabMine')
var TabMore = require('./TabPage/More/TabMore')

export default class rn_store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: "home"
        }
    }

    render() {
        // var tabHome = (<TabHome />)
        // var tabShow = (<TabShow />)
        // var tabMore = (<TabMore />)
        // var tabMine = (<TabMine />)
        return (
            <TabNavigator
                tabBarStyle={{height: 52, overflow: 'hidden'}}>
                {this.renderTabBarItem('home', "首页", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', TabHome,)}
                {this.renderTabBarItem('show', "商家", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', TabShow)}
                {this.renderTabBarItem('more', "更多", 'icon_tabbar_misc', 'icon_tabbar_misc_selected', TabMore)}
                {this.renderTabBarItem('mine', "我的", 'icon_tabbar_mine', 'icon_tabbar_mine_selected', TabMine, "1")}
            </TabNavigator>
        );
    }

    renderTabBarItem(selectedTab, title, renderIcon, renderSelectedIcon, pageView, badgeText) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image style={styles.img} source={{uri: renderIcon}}/>}
                renderSelectedIcon={() => <Image style={styles.img} source={{uri: renderSelectedIcon}}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
                badgeText={badgeText}>
                <Navigator
                    initialRoute={{name: {title}, component: pageView}}
                    configureScene={(route, routeStack) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
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

AppRegistry.registerComponent('rn_store', () => rn_store);
