
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';



class LibraryList extends Component {
    renderRow(library) {
        return <ListItem library={library.item} />;
    }
 
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderRow}
                keyExtractor={(library) => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => ({
    libraries: state.libraries
});

export default connect(mapStateToProps)(LibraryList);