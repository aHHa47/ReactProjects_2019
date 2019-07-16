// Card Item Component

import React from 'react';
import {View} from 'react-native';

const CardItem = (props) =>{
    return(

        <View style= {Styles.containerStyle}>
            {props.children}
        </View>
    );
};

const Styles = {
    containerStyle : {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#F6F7EB',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#3F88C5',
        position: 'relative',
    }
}

export {CardItem};