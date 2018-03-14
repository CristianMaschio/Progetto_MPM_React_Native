import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, ScrollView } from 'react-native';

var styles =require('../stile/style');

class Elemento extends Component{


    render (){
        return(
            <View>
                <View >
                    <Text style={[{textAlign:'center'},styles.textDefault,styles.textTitle2,styles.buttonAdd]}>Inserisci nel calendario</Text>
                </View>
                <ScrollView>
                <View >
                    <View style={[styles.formatElement]}>
                        <Text style={[styles.textDefault,styles.textTitle1]}>Nome Ortaggio</Text>
                    </View>
                    <View style={[styles.formatElement]}>
                        <View style={styles.leftInformation}>
                            <Text style= {styles.textDefault}>Difficoltà:</Text>
                            <Text style= {styles.textDefault}>Mesi Semina:</Text>
                        </View>
                        <View style={styles.rightInformation}>
                            <Text style= {styles.textDefault}>Esposizione Sole:</Text>
                            <Text style= {styles.textDefault}>Mesi Raccolta:</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.textDefault,styles.textTitle2]}>Descrizione:</Text>
                            <Text style={[{paddingLeft:20},styles.textDefault]}>...</Text>

                        <Text style={[styles.textDefault,styles.textTitle2]}>Processi:</Text>
                            <Text style={[{paddingLeft:20},styles.textDefault]}>...</Text>

                            <Text  style={[{paddingLeft: 20},styles.textDefault,styles.textSubTitle]}>Semina:</Text>
                                <Text style={[{paddingLeft:40},styles.textDefault]}>...</Text>
                        
                            <Text style={[{paddingLeft: 20},styles.textDefault,styles.textSubTitle]}>Messa a dimora:</Text>
                                <Text style={[{paddingLeft:40},styles.textDefault]}>...</Text>
                        
                                <Text style={[styles.textDefault,{paddingLeft: 40, fontSize: 16, fontWeight: 'bold'}]}>Distanze:</Text>
                                    <Text style={[{paddingLeft:60},styles.textDefault]}>...</Text>
                        
                            <Text style={[{paddingLeft: 20},styles.textDefault,styles.textSubTitle]}>Raccolta:</Text>
                                <Text style={[{paddingLeft:40},styles.textDefault]}>...</Text>
                        
                        <Text style={[styles.textDefault,styles.textTitle2]}>Tipo di terreno:</Text>
                            <Text style={[{paddingLeft:20},styles.textDefault]}>...</Text>

                        <Text style={[styles.textDefault,styles.textTitle2]}>Concimazione:</Text>
                            <Text style={[{paddingLeft:20},styles.textDefault]}>...</Text>
                        
                        <Text style={[styles.textDefault,styles.textTitle2]}>Annaffiamento:</Text>
                            <Text style={[{paddingLeft:20},styles.textDefault]}>...</Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}
module.exports = Elemento;
