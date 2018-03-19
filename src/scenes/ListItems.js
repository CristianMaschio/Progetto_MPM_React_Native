import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { greens } from '../services/data';

class ListItems extends Component {
  onLearnMore = (green) => {
   // this.props.navigation.navigate('Details', { ...green });
  };

  render() {
    return (
      <View style={{flex:2}}>
      <ScrollView>
        <List>
          {greens.map((green) => (
            <ListItem
              key={green.name}
              roundAvatar
              avatar={{ uri: green.picture.thumbnail }}
              title={green.name}
              onPress={() => this.onLearnMore(green)}
            />
          ))}
        </List>
      </ScrollView>
      </View>
    );
  }
}

export default ListItems;
