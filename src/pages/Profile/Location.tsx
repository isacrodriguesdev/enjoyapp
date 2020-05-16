import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SimpleLineIcons } from '~/app/icon';
import { font } from '~/app';
import { secundaryColors } from '~/app/colors';
// imports
// types
// components

type Props = {
   distance: number,
   local: string
};

export default (props: Props) => {

   return (
      <View style={styles.locationContainer}>
         <Text style={styles.locationTitleText}>
            Localização
         </Text>
         <View style={styles.infoLocationContainer}>
            <SimpleLineIcons name="home"
               color={styles.infoLocationText.color} size={14} />
            <Text style={styles.infoLocationText}>
               {props.local}
            </Text>
         </View>
         <View style={styles.infoLocationContainer}>
            <SimpleLineIcons name="location-pin"
               color={styles.infoLocationText.color} size={15} />
            <Text style={styles.infoLocationText}>
               {props.distance + " km de você"}
            </Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   infoLocationContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 4,
      marginTop: 2
   },
   infoLocationText: {
      color: "rgba(0,0,20,0.85)",
      fontFamily: font.QuicksandSemiBold,
      marginLeft: 5,
      fontSize: 14,
      bottom: 1
   },
   locationContainer: {
      top: 0
   },
   locationTitleText: {
      color: secundaryColors[1],
      marginBottom: 5,
      fontSize: 16.5,
      fontFamily: font.QuicksandBold,
      marginLeft: 5,
      top: 0
   }
});