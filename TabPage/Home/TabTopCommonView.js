/**
 * Created by Yooz on 2017/1/4.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get('window')

export default class CommonView extends Component {
    defaultProps = {
        leftImg: '',
        leftTitle: '',
        rightTitle: '',
        jumpto:'',
        callBackClickCell: null
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.clickItem(this.props.jumpto,this.props.leftTitle)
            }}>
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
            </TouchableOpacity>
        )
    }

    clickItem(url, name) {
        if (this.props.callBackClickCell == null) return
        this.props.callBackClickCell(url, name)
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

module.exports = CommonView;