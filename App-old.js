import React from 'react';
import { Button, Image, View, Text, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import Signup from './screens/signup'
import Login from './screens/login'
import Starting from './screens/starting'
import SignupForm from './screens/signupForm'
import LoggedInScreen from './screens/loggedIn'
import Purchase from './screens/purchase'
import VideoCalling from './screens/videoCalling'

// import { Font } from 'expo';
const RootStack = createStackNavigator(
  {
    StartingScreen:{
      screen:Starting,
    },
    SignupScreen: {
      screen: Signup,

    },
    LoginScreen:{
      screen:Login,
    },
    SignupFormScreen:{
      screen:SignupForm,
    },
    LoggedInScreen:{
      screen:LoggedInScreen,
    },
    PurchaseScreen:{
      screen:Purchase,
    },
    VideoCallingScreen:{
      screen:VideoCalling,
    },
  },
  {
    mode: 'modal',
    // headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  // constructor()
  // {
  //   super();
  //   this.state={
  //     fontLoaded:false
  //   }
  // }
  // async componentDidMount() {
  //
  //
  //     await Font.loadAsync({
  //       'GothamBold': require('./assets/fonts/GothamRoundedBold.ttf'),
  //       'GothamMedium': require('./assets/fonts/GothamRoundedMedium.ttf'),
  //     });
  //     console.log("Font loading ......");
  //     this.setState({fontLoaded:true})
  //
  // }

  render() {
      return(
            <AppContainer />
        )
    }
  }
