
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import AppBar from './view/barra';
import Body from './view/corpo';
var styles = require('./stile/style');

class Home extends Component {
    render() {
      return (
        <View style={styles.body}>
          <AppBar/>
          <Body/>
        </View>
      );
    }
  }

  module.exports = Home;