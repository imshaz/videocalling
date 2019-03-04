import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TouchableHighlight
} from "react-native";
import Footer from './footer'
import EventBus from 'eventing-bus';

class Starting extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(){
      super()
      console.log("Starting screen Constructor :: ", this.state);
    }

    onSignUpButtonPressed = () => {
      this.props.navigation.navigate('SignupScreen', "Starting Page")
      // this.props.navigation.setParams({otherParam: 'Updated!'})
    };

    onLoginButtonPressed = () => {
      this.props.navigation.navigate('LoginScreen')
    };

    ToSPressed=()=>
    {
      console.log("Terms of services pressed");
    }

    PPPressed=()=>
    {
      console.log("Privacy Policy pressed");
    }

    renderImage = () => {
      const screenSize = Dimensions.get('window');
      const imageSize = {
        width: screenSize.width*0.6,
        height: screenSize.height*0.2,
      };
      EventBus.publish("ImageSize", imageSize)
      return (
        <Image
          style={[styles.image, imageSize]}
          source={require('../assets/logo-small-long-trans.png')}
        />
      );
    };


    render() {

        return (

            <View style={styles.container}>
              <View style={styles.TopContainer}>
                {this.renderImage()}
                <View style={styles.buttons}>
                  <Text style={styles.helpText}>Hi there,{"\n"} I'm here to help!</Text>
                </View>

                <View style={styles.buttons}>
                  <Text style={styles.helpText1}>Your companion for{"\n"} easy communications</Text>
                </View>

                <TouchableHighlight style={styles.joinBtn} onPress={this.onSignUpButtonPressed} >
                  <Text style={styles.JoinBtnText}> Join deaftawk </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.BottomContainer}>

                <Text onPress={this.onLoginButtonPressed} style={styles.LoginBtnText}> Login to existing account </Text>

                <Footer />
              </View>
            </View>
        );
    }
}
export default Starting;

const styles = StyleSheet.create({

  helpText:{
    textAlign: 'center',
    fontSize:22,
    fontWeight:'bold',
    color:"white"
  },
  helpText1:{
    textAlign: 'center',
    fontSize:20,
    marginBottom: 50,
    color:"white"
  },
  joinBtn: {
    width: '60%',
    marginBottom: 80,
    borderRadius:50,
    justifyContent:"center",
    backgroundColor:"white",
    height:"10%",
  },
  image: {
    marginTop: 60,
    resizeMode: 'contain',
    marginBottom: 30,

  },
  container: {
    alignItems: 'center',
    height:"100%"
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    // backgroundColor:"red",
    // width:"100%",
  },
  // button: {
  //   marginHorizontal: 14,
  // },
  // save: {
  //   marginVertical: 9,
  // },
  JoinBtnText:{
    color:"#02a5de",
    fontSize:20,
    textAlign:'center',
    fontWeight:"bold"
  },
  LoginBtnText:{
    marginTop:40,
    color:"black",
    fontSize:20,
    fontWeight:'bold',
    color:"gray",
  },
  TopContainer:{
    backgroundColor:'#02a5de',
    width:"100%",
    alignItems: 'center',
    height:"72%"
    // marginBottom:50
  },
  BottomContainer:{
    // marginTop:100,
    flex: 1,
    // justifyContent: 'flex-end',
    // backgroundColor:'yellow',
    width:"100%",
    alignItems: 'center',
    // height:"100%"
  },
});
