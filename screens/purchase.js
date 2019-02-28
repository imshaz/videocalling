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
import { signup, PurchaseStyle} from './style.js';

class Purchase extends Component {

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
      console.log("navigation :: ", this.props.navigation);
        return (
                <View style={PurchaseStyle.container}>
                  <View style={PurchaseStyle.HeadingContentView}>
                    <Text style={PurchaseStyle.HeadingText}>store</Text>
                    <Text style={PurchaseStyle.RemainingMinText}>You have <Text style={{fontWeight:"bold"}}>120 minutes</Text> left</Text>
                    <Text style={PurchaseStyle.tapToPurchaseText}>tap to purchase</Text>
                  </View>
                  <View style={PurchaseStyle.MinPurchaseView}>

                    <TouchableOpacity style={PurchaseStyle.PurchaseMinBtn} >
                      <Text style={PurchaseStyle.BtnTextLeft}> 10 <Text style={{fontWeight:"normal", fontSize:26}}>minutes</Text> </Text>
                      <Text style={PurchaseStyle.BtnTextRight}> $9.99 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={PurchaseStyle.PurchaseMinBtn} >
                      <Text style={PurchaseStyle.BtnTextLeft}> 30 <Text style={{fontWeight:"normal", fontSize:26}}>minutes</Text> </Text>
                      <Text style={PurchaseStyle.BtnTextRight}> $9.99 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={PurchaseStyle.PurchaseMinBtn} >
                      <Text style={PurchaseStyle.BtnTextLeft}> 60 <Text style={{fontWeight:"normal", fontSize:26}}>minutes</Text> </Text>
                      <Text style={PurchaseStyle.BtnTextRight}> $9.99 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={PurchaseStyle.PurchaseMinBtn} >
                      <Text style={PurchaseStyle.BtnTextLeft}> 120 <Text style={{fontWeight:"normal", fontSize:26}}>minutes</Text> </Text>
                      <Text style={PurchaseStyle.BtnTextRight}> $9.99 </Text>
                    </TouchableOpacity>

                  </View>

                </View>
        );
    }
}
export default Purchase;
