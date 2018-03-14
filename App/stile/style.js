import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
//===========Unique Style===================
    barApp: {
        flexDirection: 'row',
        backgroundColor: 'black',
        //marginTop: 20,
        paddingTop: 25,
    },

    titleApp: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#D2D2D2',
        textAlignVertical: 'center'
    },

    body: {
        flex: 2,
        backgroundColor: '#5F5F5F',
    },

//===========Text Style===================
    textDefault: {
        color: '#D2D2D2',
        fontSize: 16
    },

    textTitle1: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    textTitle2: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10
    },
    textSubTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

//===========Home Style===================
    itemList: {
        padding: 10,
        height: 44,
        borderTopWidth: 1,
        borderTopColor: 'black'
    },

    itemListText: {
    },

//===========ElementSelected Style===================
    buttonAdd: {
        padding: 5,
        overflow: 'hidden',
        backgroundColor: '#2F2F2F',
        borderWidth: 1,
       // borderRadius: 20,
        borderStyle: 'dotted',
        borderColor: 'black',
    },

    formatElement: {
        flex: 1,
        flexDirection: 'row',
    },

    imageElement:{
        flex: 1
    },

    leftInformation: {
        flex: 1
    },

    rightInformation: {
        flex: 1
    },

    

});

module.exports = styles;
