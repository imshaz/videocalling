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
import EventBus from 'eventing-bus';
class Footer extends Component {



    static navigationOptions = {
        header: null
    }


    ToSPressed=()=>
    {
      console.log("Terms of services pressed");
    }

    PPPressed=()=>
    {
      console.log("Privacy Policy pressed");
    }

    render() {

        return (
                <View style={styles.footer}>
                  <View style={styles.textRow}>
                    <Text style={styles.disclaimer}>By Joining or Logging in, you are agreeing to our{" "}
                      <Text onPress={this.ToSPressed} style={styles.ToS}>Terms of Service</Text>
                        {" "}and{" "}
                      <Text onPress={this.PPPressed} style={styles.ToS}>Privacy Policy</Text>

                    </Text>
                  </View>
                </View>
        );
    }
}
export default Footer;

const styles = StyleSheet.create({

  disclaimer: {
    textAlign: 'center',
    width: '80%',
    marginBottom: 15,
    color:'gray',
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ToS:{
    textDecorationLine:"underline",
    fontWeight:"bold"
  }
});
