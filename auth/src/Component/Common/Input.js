// Input Component

import React from 'react';
import {Text,View,TextInput} from 'react-native';

const Input = ({labelprop, valueprop,onChangeTextprop,placeholderprop, secureTextEntryprop }) => {
    const {inputStyle,labelStyle,containerStyle}= Styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{labelprop}</Text>
            <TextInput
            placeholder={placeholderprop}
            autoCorrect = {false}
            value = {valueprop}
            onChangeText = {onChangeTextprop}
            style={inputStyle}
            secureTextEntry = {secureTextEntryprop}
    
            />
    
    
            </View>);
    
};


const Styles = {
    inputStyle:{

         color: '#000',
         paddingLeft: 5,
         paddingRight: 5,
         fontSize: 18,
         lineHeight: 23,
         flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 10,
        flex: 1
    } ,
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input};