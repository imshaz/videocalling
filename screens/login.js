import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    TextInput,
    TouchableHighlight
} from "react-native";
import Footer from './footer'
import { signup, buttons, login } from './style.js'

class Login extends Component {

  static navigationOptions = ({ navigation }) => {
    return{
      headerStyle:{ backgroundColor: '#02a5de', height:90, zIndex: 100} ,
      headerTitle: (<Image style={signup.HeaderImg} source={require('../assets/logo-small-long-trans.png')} />)  ,
      headerLeft:<TouchableOpacity   onPress={() => navigation.goBack()} >
                    <Image style={signup.BackImg} source={require('../assets/arrow-back.png')} />
                  </TouchableOpacity >
          }
  }
    render() {
        return (
            <View style={login.container}>
                {/*<Button title="Login screen"
                    onPress={() => this.props.navigation.navigate('SignupScreen')} />*/}
              <Text style={login.CredentialText}>Enter your credentials</Text>
              <View style={login.InputFormView}>
                  <TextInput
                    style={login.emailField}
                    placeholder="email address"
                  />
                  <TextInput
                    secureTextEntry={true}
                    placeholder="password"
                    style={login.password}
                  />
              </View>

              <View style={login.ButtonView}>
                <TouchableHighlight style={login.loginBtn} onPress={() => this.props.navigation.navigate('LoggedInScreen')}>
                  <Text style={login.loginBtnText}> Login </Text>
                </TouchableHighlight >

                <Text style={login.JoinDeaftwakBtn} onPress={() => this.props.navigation.navigate('SignupScreen')}> Join<Text style={{color:"#02a5de"}}> Deaftawk </Text></Text>
              </View>

              <View style={login.BottomView}>
                <TouchableHighlight style={login.Facebookbtn}>
                  <Text style={login.FacebookbtnText}> Login with facebook </Text>
                </TouchableHighlight>

                <Footer />
              </View>
            </View>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
// onPress={() => this.props.navigation.navigate('SignupScreen')} />
