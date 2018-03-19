import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Reactn from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListItems from './src/scenes/ListItems';

const SmartOrto = StackNavigator(
  {
    ListItems: {
      screen: ListItems,
      navigationOptions: {
        title: 'Lista ortaggi',
        headerRight: <TouchableHighlight onPress={()=> {
          console.log('Funziona il click');
          }}
          underlayColor="null"><Image style={{width: 35, height: 35, marginRight: 10}}
        source={require('./src/components/img/black-menu-icon.png')}
      />
      </TouchableHighlight >,
      },
    },
  },
  {
    initialRouteName: 'ListItems',
  }
);

export default class App extends React.Component {
render() {
    return (
      <SmartOrto/>
    )
}
}