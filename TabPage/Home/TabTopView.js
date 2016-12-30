/**
 * Created by Yooz on 2016/12/27.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
    ListView
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');
var TopMenu = require('./../../LocalData/TopMenu.json');


class TabTopListView extends Component {
    defaultProps = {
        rowData: []
    }

    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            dataSource: ds.cloneWithRows(this.props.rowData)
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        )
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity onPress={() => {
                alert(rowID);
            }} activeOpacity={0.7} style={styles.itemClickStyle}>
                <Image style={{width: 50, height: 50}} source={{uri: rowData.image}}/>
                <Text>{rowData.title}</Text>
            </TouchableOpacity>
        )
    }
}


export default class TabTopView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mCurrentPage: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled={true}
                    style={{marginTop:10}}
                    //// 当一帧滚动结束的时候调用
                    onMomentumScrollEnd={(e) => {
                        this.onScrollAnimationEnd(e)
                    }}>
                    {this.renderItem()}
                </ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {this.renderDotAll()}
                </View>
            </View>
        );
    }

    //当一帧滚动结束的时候调用
    onScrollAnimationEnd(e) {
        //求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            mCurrentPage: currentPage
        });
    }

    renderItem() {
        var itemArr = []
        //var colorArr = ['gray', 'red']
        var rowData = TopMenu.data
        for (let i = 0; i < rowData.length; i++) {
            itemArr.push(
                <TabTopListView key={i} rowData={rowData[i]}/>
            )
        }
        return itemArr
    }

    renderDotAll() {
        var dotArr = [], style;
        for (var i = 0; i < 2; i++) {
            style = (i === this.state.mCurrentPage) ? {color: 'orange'} : {color: 'gray'};
            dotArr.push(
                <Text key={i} style={[{fontSize: 28, marginLeft: 5, marginRight: 5}, style]}>&bull;</Text>
            )
        }
        return dotArr
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'white'
    },
    contentViewStyle: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemClickStyle: {
        alignItems: 'center',
        width: width / 5,
        height: 70
    }
});

module.exports = TabTopView;
