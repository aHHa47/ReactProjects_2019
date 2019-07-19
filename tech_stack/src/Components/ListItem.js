import React,{Component} from 'react';
import {Text, TouchableWithoutFeedback,View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardItem} from './Common'
import * as actions from '../Actions'; // Import multiple actions 

class ListItem extends Component {
  componentDidUpdate() {
 
    LayoutAnimation.spring();
}
    
    renderDsic(){

      const {library, expanded} = this.props;
      if(expanded){
        return(
          <CardItem>
              <Text style={{flex:1}}>{library.description}</Text>
          </CardItem>
          
        );
      }
    }
 
    render() {
        //console.log(this.props);

        const {titleStye} = Styles;
        const {id, title} = this.props.library;



      return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardItem>
              <Text style={titleStye}>{title}</Text>
            </CardItem>

            {this.renderDsic()}
          </View>
          
        </TouchableWithoutFeedback>
           
      );
    }
  }

  const Styles ={
    titleStye:{
      fontSize: 18,
      paddingLeft: 15
    }
  }


  const MapStateToProps = (state,ownProps) => {

      const expanded = state.selectedLibraryId === ownProps.library.id;
      return{expanded};
  };
   
export default connect(MapStateToProps,actions)(ListItem);