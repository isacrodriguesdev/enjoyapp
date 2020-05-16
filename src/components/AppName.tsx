import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { primaryColor, secundaryColors, thirdColors, primaryColors } from '~/app/colors';
import { font } from '~/app';
// imports
// types
// components
import { LinearTextGradient } from "react-native-text-gradient";

type Props = {
   size?: number
};

export default (props: Props) => {

   return (
      <LinearTextGradient
      numberOfLines={1}
      useViewFrame={true}
      locations={[0.5, 0.95]}
      colors={secundaryColors}
      start={{ x: 2.3, y: 0 }}
      end={{ x: 0, y: 1 }}>
      <Text style={[styles.appNameText, props.size ? {fontSize: props.size} : {}]}>
         ENJOY
      </Text>
   </LinearTextGradient>
   );
}

const styles = StyleSheet.create({
   appNameText: {
      fontSize: 22,
      fontFamily: font.MontserratBold,
      color: primaryColors[1],
      bottom: 0,
   },
});