import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Reactn from 'react-native';
const { 
  DrawerLayoutAndroid,
  ToolbarAndroid,
} = Reactn;

export default class App extends React.Component {
render() {
    return (

      <View style={styles.containerToolbar}>
       <ToolbarAndroid style={styles.toolbar}
                       title='{this.props.title}'
                       titleColor={'#000000'}
                       />
                       <Text> Prova </Text>
     </View>
    )
}
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 70,
  },

});
