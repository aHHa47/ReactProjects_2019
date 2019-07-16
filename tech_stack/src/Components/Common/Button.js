// Button Component

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onclickprops, children}) => {
    const {buttonStyle, textStyle} = Styles;
    return(
        <TouchableOpacity onPress={onclickprops} style = {buttonStyle}>
         <Text style={textStyle}>{children}</Text>

        </TouchableOpacity>
    );
};

const Styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#F6F7EB',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,

    },
    buttonStyle : {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#CA5310',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#393E41',
        marginLeft: 5,
        marginRight: 5,


    }
}

export {Button};