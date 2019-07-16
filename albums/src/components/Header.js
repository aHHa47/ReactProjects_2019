 // Header components

 // import libraries for making component
 import React from 'react';
 import { Text, View } from 'react-native';


 //make a component
 const Header = (props) => {
     const { textStyle, viewStyle} = styles;
     
     return ( 
     <View style={viewStyle} >
         <Text style = { textStyle } > {props.headerText} </Text> 
         
    
        </View >


     );
 };

 const styles = {

    viewStyle:{
        backgroundColor: '#3F88C5',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 30,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity: .5,
        elevation: 2,
        position: 'relative',
       
    },
     textStyle: {
         fontSize: 30,
         fontFamily: 'Futura',
         color: '#393E41',
     }

 }



 //make the component available to other part of the app

 export default Header;