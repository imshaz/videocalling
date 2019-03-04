import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity ,
    Image,
    Dimensions,
    TouchableHighlight
} from "react-native";

import Footer from './footer'
import { signup, buttons } from './style.js'

import EventBus from 'eventing-bus';


class Signup extends Component {


  componentDidMount=()=>
  {
    var previousPageName=this.props.navigation.state.params;
    console.log("previousPageName :: ", previousPageName);

    this.changeState="hello";
    console.log("{this.changeState }", this.changeState );
    EventBus.on("ImageSize", this.callBack.bind(this));
    // this.navigation.setParams({
    //   myTitle: this.props.navigation.state.params
    // })
    this.setState(() => {
                console.log('setting states');
            });

  }

  callBack=(e)=>{
    console.log("Eventbuss called :: ", e);
  }


  ToSPressed=()=>
  {
    console.log("Terms of services pressed");
  }

  PPPressed=()=>
  {
    console.log("Privacy Policy pressed");
  }

  handleDisablePerson = () => {
  console.log("handleDisablePerson");
  this.props.navigation.navigate('SignupFormScreen')
  };

  handleinterpreter = () => {
    console.log("handleinterpreter");
    this.props.navigation.navigate('SignupFormScreen')
  };

    static navigationOptions = ({ navigation }) => {
      return{
        headerStyle:{ backgroundColor: '#02a5de', height:90, zIndex: 100} ,
        headerTitle: (<Image style={signup.HeaderImg} source={require('../assets/logo-small-long-trans.png')} />)  ,
        headerLeft:<TouchableOpacity   onPress={() => navigation.goBack()} >
                      <Image style={signup.BackImg} source={require('../assets/arrow-back.png')} />
                    </TouchableOpacity >
            }
    }

    renderImage = () => {
      const screenSize = Dimensions.get('window');
      const imageSize = {
        width: screenSize.width*0.6,
        height: screenSize.height*0.1,
      };
      EventBus.publish("ImageSize", imageSize)
      return (
        <Image
          style={[signup.image, imageSize]}
          source={require('../assets/logo-small-long-trans.png')}
        />
      );
    };

    renderJoinImage = () => {
      const screenSize = Dimensions.get('window');
      const imageSize = {
        width: screenSize.width*0.25,
        height: screenSize.height*0.025,
      };
      return (
        <Image
          style={[signup.joinImage, imageSize]}
          source={require('../assets/logo-small-long-trans.png')}
        />
      );
    };

    render() {
      console.log("Signup Render Called ");
        return (
            <View style={signup.container}>

              {/*this.renderImage()*/}

              <Text style={signup.joinContent}>Join {this.renderJoinImage()} as a</Text>

                <TouchableOpacity style={signup.DisablePersonBtn} onPress={this.handleDisablePerson} >
                  <Text style={signup.BtnText}> Deaf Person </Text>
                </TouchableOpacity>

                <TouchableHighlight style={signup.interpreterBtn} onPress={this.handleinterpreter} >
                  <Text style={signup.BtnText}> Interpreter </Text>
                </TouchableHighlight>

                <Footer />

            </View>
        );
    }
}
export default Signup;


// <Button title="Signupp screen" onPress={() => this.props.navigation.navigate('LoginScreen')} />


// static navigationOptions = ({ navigation }) => {
//   return{
//   headerStyle:{ backgroundColor: 'red', zIndex: 100} ,
//   headerTitle:"Title",
//   headerTintColor: 'yellow',
//   headerTitleStyle:{ color: 'green'},
//   headerLeft:<TouchableHighlight  onPress={() => navigation.goBack()} >
//                 <Image style={styles.BackImg} source={require('../assets/arrow-right.png')} />
//               </TouchableHighlight>
//         }
// }
