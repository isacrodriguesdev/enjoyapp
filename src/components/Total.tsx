import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { secundaryColors } from '~/app/colors';
import { font } from '~/app';
import Mount from './Mount';
// imports
// types
// components

type Props = {
   value: number
};

export default (props: Props) => {

   return (
      <Mount render={props.value}>
         <LinearGradient colors={secundaryColors}
            start={{ x: 2, y: 1 }} end={{ x: 0, y: 1 }}
            style={styles.container}>
            <Text style={styles.totalText}>
               {props.value}
            </Text>
         </LinearGradient>
      </Mount>
   );
}

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      minWidth: 19,
      minHeight: 19,
      maxHeight: 19,
      maxWidth: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 9,
      left: 9,
      top: -7,
      elevation: 1,
      padding: 5,
      flexDirection: "row"
   },
   totalText: {
      color: "white",
      fontFamily: font.MontserratMedium,
      fontSize: 11,
      bottom: 1,
      textShadowColor: "rgba(0,0,0,.2)",
      textShadowOffset: { height: 1, width: 1 },
      textShadowRadius: 5,
   }
});