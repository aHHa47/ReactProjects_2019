// Album list component

import React , {Component} from 'react';
import { ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component{
   
   state = {albums:[]};
   

   
    componentDidMount(){
        //console.log('componentWillMount first!');
        // debugger; => Debugg statement it wil automaticly break at this point for further debugging.

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }

    // Method to render albums 
    // Refrence to json file => {album.title} 
    renderAlbums(){
         return this.state.albums.map(album => 
         <AlbumDetail key={album.title} album={album}/>
         );
    }
    
    render(){

        console.log(this.state);
        return(
            <ScrollView>
               {this.renderAlbums()}
            </ScrollView>
        );
    }

}

 

export default AlbumList;
