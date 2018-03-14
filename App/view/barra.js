
import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
var styles =require('../stile/style');

class AppBar extends Component{
    render (){
        return(
            <View style={styles.barApp}>
                <Image style={{width: 51, height: 51, resizeMode: Image.resizeMode.contain}} source={require('../../assets/icon.png')} />
                <Text style={styles.titleApp}>iOrto</Text>
            </View>
        );
    }
}
module.exports = AppBar;
