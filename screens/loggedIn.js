import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import EventBus from 'eventing-bus';
import { LoggedInScreenStyle, signup } from './style.js';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
import { Icon } from 'react-native-elements'

class LoggedInScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return{
      headerStyle:{ backgroundColor: 'transparent', height:70, zIndex: 100} ,
      headerLeft:<TouchableOpacity   onPress={() => navigation.goBack()} >
                    <Image style={LoggedInScreenStyle.BackImg} source={require('../assets/arrow-back.png')} />
                  </TouchableOpacity >
          }
  }


  tabs = [
    {
      key: 'account',
      icon: 'Acc',
      label: 'Account',
      barColor: '#02a5de',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'history',
      icon: 'history',
      label: 'History',
      barColor: '#02a5de',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'help',
      icon: 'music-note',
      label: 'Need Help',
      barColor: '#02a5de',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'setting',
      icon: 'settings',
      label: 'Setting',
      barColor: '#02a5de',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  renderIcon = icon => ({ isActive}) => {
    return(
      (icon=="Acc")?
      <Image
        style={LoggedInScreenStyle.tabimg}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
      />
        :
        <Icon size={40} color="white" name={icon} />
      )
  }

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

    render() {

        return (
          <View style={LoggedInScreenStyle.container}>
            <View style={LoggedInScreenStyle.userImageView}>
              <Image
                style={LoggedInScreenStyle.userImage}
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
              />
            </View>
            <View style={LoggedInScreenStyle.ImageBottomView}>

              <View style={LoggedInScreenStyle.GreetingTextView}>
                <Text style={LoggedInScreenStyle.GreetingText}>Hello User</Text>
                <Text style={LoggedInScreenStyle.RemainingMinText}>You have <Text style={{fontWeight:"bold"}}>120 minutes</Text> left</Text>
              </View>

              <View style={LoggedInScreenStyle.BottomBtnView}>
                <TouchableHighlight style={LoggedInScreenStyle.reqInterpreterBtn} onPress={() => this.props.navigation.navigate('VideoCallingScreen')} >
                  <Text style={LoggedInScreenStyle.reqInterpreterBtnText}> Request Interpreter </Text>
                </TouchableHighlight>

                <TouchableHighlight style={LoggedInScreenStyle.purchaseMinBtn} onPress={() => this.props.navigation.navigate('PurchaseScreen')}>
                  <Text style={LoggedInScreenStyle.purchaseMinBtnText}> Purchase Minutes </Text>
                </TouchableHighlight>
              </View>

            </View>
            <View style={LoggedInScreenStyle.BottomTabView}>
                <BottomNavigation
                  style={LoggedInScreenStyle.BottomTab}
                  onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                  renderTab={this.renderTab}
                  tabs={this.tabs}
                />
            </View>
          </View>
        );
    }
}
export default LoggedInScreen;
