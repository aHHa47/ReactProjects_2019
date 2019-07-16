// App Component

import React,{Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner, CardItem,Card} from './Common';
import LoginForm from './LoginForm';





class App extends Component{
    state = {LoggedIn:null};

    componentDidMount(){

        firebase.initializeApp({
            apiKey: 'AIzaSyBUetRjms4suZRsXtaAoLZLmqU_BRjkg4A',
            authDomain: 'auth-8962b.firebaseapp.com',
            databaseURL: 'https://auth-8962b.firebaseio.com',
            projectId: 'auth-8962b',
            storageBucket: '',
            messagingSenderId: '665988229309',
            appId: '1:665988229309:web:a4dc586356acfcab'
          });

     firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({LoggedIn:true});
        }else{
            this.setState({LoggedIn:false});
        }
     });
    }

    renderContent(){

        switch (this.state.LoggedIn) {
            case true:
                return (
                
                <Card>
                    <CardItem>
                        <Button onclickprops={()=> firebase.auth().signOut()}>
                        Log Out
                        </Button>
                    </CardItem>
                </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner spinnerSizeprop='large'/>;
        }
    }

    render(){
        return(

            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>

        );
    }

}

export default App;