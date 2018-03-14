import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import ListaElementi from './home';
import Elemento from './elementSelected';

var styles =require('../stile/style');

class Body extends Component{

    render (){
        return(
            <View style={styles.body}>
                <Elemento/>
            </View>
        );
    }
}
module.exports = Body;