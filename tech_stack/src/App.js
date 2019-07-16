
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './Components/Common';

/**
 * Creates a Redux store that holds the complete state tree of our app.
 * There should only be a single store in the app.
 */



const App = () =>{

    return (
        <Provider store={createStore(reducers)}>
            <View>
            <Header headerText='IT-News'/>
            </View>
        </Provider>
        
    );
};

export default App; 