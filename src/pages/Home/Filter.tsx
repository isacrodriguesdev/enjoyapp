import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { font } from '~/app';
import { primaryColor } from '~/app/colors';
// imports
// types
// components
import Slider from '~/components/Slider';

type Props = {};

class Filter extends Component<Props> {

   state = {};

   render() {

      return (
         <View style={styles.container}>
            <View style={styles.filterContainer}>

               <View style={styles.titleAndValueContainer}>
                  <Text style={styles.titleText}>Distância</Text>
                  <Text style={styles.valueText}>200km</Text>
               </View>

               <View style={styles.interactionContainer}>
                  <Slider />
               </View>

            </View>
         </View>
      );
   }
}

export default Filter;

const styles = StyleSheet.create({
   container: {},
   filterContainer: {

   },
   titleAndValueContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   titleText: {
      fontSize: 17,
      fontFamily: font.MontserratSemiBold,
      color: primaryColor,
   },
   valueText: {
      fontSize: 17,
      fontFamily: font.MontserratSemiBold,
      color: "rgba(0,0,30,0.75)",
   },
   interactionContainer: {

   },
});