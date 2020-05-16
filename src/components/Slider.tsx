import React, { Component } from 'react';
import { View, StyleSheet, Animated, Text, Alert } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
// imports
import { primaryColor } from '~/app/colors';
import { width } from '~/app/window';
// types
// components

type Props = {
   width?: number | string,
   height?: number | string
};

class Slider extends Component<Props> {

   state = {};

   translationX = new Animated.Value(10);
   maxWidth = ((width / 1.25) / 100);

   animatedEvent = Animated.event([
      {
         nativeEvent: {
            translationX: this.translationX
         }
      }
   ], { useNativeDriver: false });

   onEventStateChanged() {
      Alert.alert("O")
   }

   componentDidMount() {
   }

   render() {

      return (
         <PanGestureHandler
            onGestureEvent={this.animatedEvent}
            onHandlerStateChange={this.onEventStateChanged}
         >
            <View style={styles.container}>
               <Animated.View style={[styles.line, {
                  width: this.translationX
               }]}>
                  <Animated.View style={[styles.thumb, {
                     transform: [{
                        translateX: this.translationX
                     }]
                  }]} />
               </Animated.View>
            </View>
         </PanGestureHandler>
      );
   }
}

export default Slider;

const styles = StyleSheet.create({
   container: {
      height: 100,
      justifyContent: "center",
   },
   line: {
      // width: "100%",
      height: 3,
      backgroundColor: primaryColor,
      borderRadius: 50,
      justifyContent: "center"
   },
   thumb: {
      elevation: 5,
      width: 40,
      height: 40,
      padding: 5,
      backgroundColor: "white",
      borderRadius: 100,
      top: 0,
      left: 0,
      right: 0,
   }
});

