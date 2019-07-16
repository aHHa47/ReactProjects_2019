// Login Form component
import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card , CardItem, Input, Spinner} from './Common';



class LoginForm extends Component{
    
    state = {email : '', password: '', error: '', loading: false};

    onButtonPrss(){
        const {email,password} = this.state;

        this.setState({error:'', loading: true});

        // login with email and password
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            // if login failed, create new account with email and password.
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(
                // if failed again show Error message to user 
                this.onLoginFail.bind(this));
        });
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''

        });
    }
    onLoginFail(){
        this.setState({error: 'Authentication failed, try again later.', loading:false});
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner spinnerSizeprop='small'/>
        }
        return(
            <Button onclickprops={this.onButtonPrss.bind(this)}>
            Log in
        </Button>
        );

    }

    render(){

        return(
            <Card>
                <CardItem>
                    <Input
                    placeholderprop = 'user@gmail.com'
                    labelprop = 'Email'
                    valueprop={this.state.email}
                    onChangeTextprop={email => this.setState({email})} 
                    />
                </CardItem>
                <CardItem>
                    <Input
                    placeholderprop='password'
                    labelprop='Password'
                    secureTextEntryprop
                    valueprop={this.state.password}
                    onChangeTextprop={password => this.setState({password})}
                    />
                </CardItem>
                <Text style={Styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardItem>
                    {this.renderButton()}
                </CardItem>

            </Card>
        );
    }
}

const Styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;