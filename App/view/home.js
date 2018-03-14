import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';
var styles =require('../stile/style');

class ListaElementi extends Component {
    state = {
        names: [
           {'name': 'Ben', 'id': 1},
           {'name': 'Susan', 'id': 2},
           {'name': 'Robert', 'id': 3},
           {'name': 'Mary', 'id': 4},
           {'name': 'Daniel', 'id': 5},
           {'name': 'Laura', 'id': 6},
           {'name': 'John', 'id': 7},
           {'name': 'Debra', 'id': 8},
           {'name': 'Aron', 'id': 9},
           {'name': 'Ann', 'id': 10},
           {'name': 'Steve', 'id': 11},
           {'name': 'Olivia', 'id': 12},
           {'name': 'Olivia', 'id': 13},
           {'name': 'Olivia', 'id': 14}
        ]
     }
     render() {
        return (
           <View>
              <ScrollView>
                 {
                    this.state.names.map((item, index) => (
                       <View key = {item.id} style = {styles.itemList}>
                          <Text style = {[styles.textDefault ,styles.textTitle1]}>{item.name}</Text>
                       </View>
                    ))
                 }
              </ScrollView>
           </View>
        )
     }
}

module.exports = ListaElementi;