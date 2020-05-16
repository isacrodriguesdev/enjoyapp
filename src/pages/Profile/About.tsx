import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// imports
import { font } from '~/app';
import { thirdColors, secundaryColors } from '~/app/colors';
import LinearGradient from 'react-native-linear-gradient';
// types
// components

type Props = {
   label: string | undefined,
   value: string | undefined
};

export default (props: Props) => {

   return (
      <View style={[styles.dataContainer]}>
         <Text style={[styles.aboutTitleText]}>
            {props.label}
         </Text>
         <LinearGradient
            start={{ x: 2, y: 1 }} end={{ x: 0, y: 1 }}
            colors={secundaryColors}
            style={styles.aboutTextContainer}>
            <Text style={[styles.aboutText]}>
               {props.value}
            </Text>
         </LinearGradient>
      </View>
   );
}

const styles = StyleSheet.create({
   dataContainer: {
      flexDirection: "row",
      marginBottom: 0,
      paddingVertical: 3,
      backgroundColor: "white",
      alignItems: "flex-start",
      justifyContent: "space-between",
      width: "100%",
   },
   aboutTextContainer: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      backgroundColor: secundaryColors[0],
      justifyContent: "center", alignItems: "center",
      borderRadius: 100
   },
   aboutTitleText: {
      marginBottom: 0,
      fontSize: 14,
      fontFamily: font.QuicksandBold,
      color: "rgba(10,0,20,.7)",
   },
   aboutText: {
      fontSize: 13,
      color: "white",
      bottom: 1,
      fontFamily: font.QuicksandBold,
   }
});