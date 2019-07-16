// Loading Spinner Component

import React from 'react';
import {View, ActivityIndicator } from 'react-native';


const Spinner = ({spinnerSizeprop,}) =>{

    return(

        <View style={Styles.spinnerStyle}>
            <ActivityIndicator
                size={spinnerSizeprop || 'large'}
            />
        </View>
    );
};


const Styles={
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export {Spinner} 