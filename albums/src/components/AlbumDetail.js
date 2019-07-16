// Album detail Components 

import React from  'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';



// Functional Component
const AlbumDetail = ({album}) =>{
    // refactor of props and style
    const{title, artist,thumbnail_image, image , url} = album;
    const{thumbnailStyle, headerContentStyle, thumbnailContainerStyle,headerTextStyle,imageArtStyle} = Styles

    return(
        <Card>
            <CardItem>
              <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image}}/>

              </View>
              <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
              </View>
            </CardItem>

            <CardItem>
                <Image style={imageArtStyle} source={{uri: image}}/>
            </CardItem>

            <CardItem>
                <Button onclickprops={() => Linking.openURL(url)}>
                    Buy Now 
                </Button>
            </CardItem>
        </Card>
    );


};

const Styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle:{
        fontSize: 18,
    },

    thumbnailStyle:{
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,

    },

    imageArtStyle:{
        height: 300,
        flex: 1,
        width: null,

    }
   
}

export default AlbumDetail;


