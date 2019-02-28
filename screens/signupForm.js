import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TouchableHighlight,
    TextInput,
    TouchableOpacity
} from "react-native";
import EventBus from 'eventing-bus';
import Footer from './footer'

import { signupForm, signup } from './style.js'


class SignupFormScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  static navigationOptions = ({ navigation }) => {
    return{
      headerStyle:{ backgroundColor: '#02a5de', height:90, zIndex: 100} ,
      headerTitle: (<Image style={signup.HeaderImg} source={require('../assets/logo-small-long-trans.png')} />)  ,
      headerLeft:<TouchableOpacity   onPress={() => navigation.goBack()} >
                    <Image style={signup.BackImg} source={require('../assets/arrow-back.png')} />
                  </TouchableOpacity >
          }
  }

  textChange=(e)=>
  {
    console.log("e ::", e );
  }


  render() {
      return (
        <View style={signupForm.container}>

          <Text style={signupForm.CredentialText}>Enter your credentials</Text>

          <View style={signupForm.FormView}>
            <TextInput
              style={signupForm.fullName}
              onChangeText={(value) => this.textChange(value)}
              placeholder="full name"
            />
            <TextInput
              style={signupForm.emailField}
              onChangeText={(value) => this.textChange(value)}
              placeholder="email address"
            />
            <TextInput
              style={signupForm.passwordField}
              placeholder="password"
              secureTextEntry={true}
            />
          </View>

          <View style={signupForm.ButtonView}>
            <TouchableHighlight style={signupForm.JoinBtn} onPress={() => this.props.navigation.navigate('LoggedInScreen')}>
              <Text style={signupForm.JoinBtnText}> Join Deaftawk </Text>
            </TouchableHighlight >

            <Text style={signupForm.loginBtn} onPress={() => this.props.navigation.navigate('LoginScreen')}> Login to existing account</Text>
          </View>

          <View style={signupForm.BottomView}>
            <TouchableHighlight style={signupForm.Facebookbtn}>
              <Text style={signupForm.FacebookbtnText}> Login with facebook </Text>
            </TouchableHighlight>

            <Footer />
          </View>

        </View>
      );
    }
}
export default SignupFormScreen;
