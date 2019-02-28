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
class VideoCalling extends Component {



    static navigationOptions = {
        header: null
    }


    render() {

        return (
                <View style={styles.footer}>
                  <Text>Video Calling............</Text>
                </View>
        );
    }
}
export default VideoCalling;

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },

});
