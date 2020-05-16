import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// imports
import { thirdColors } from '~/app/colors';
import { font } from '~/app';
import Mount from '~/components/Mount';
// types
// components

type Props = {
   text?: string | undefined,
   descriptionPhrase: string | undefined
};

export default (props: Props) => {

   return (
      <View style={[styles.dataContainer]}>

         <Text style={styles.aboutTitleText}>#{props.descriptionPhrase}</Text>

         <Mount render={props.text}>
            <View style={{
               paddingBottom: styles.dataContainer.marginVertical
            }}>
               <Text style={styles.aboutText}>
                  {props.text}
               </Text>
            </View>
         </Mount>

      </View>
   );
}

const styles = StyleSheet.create({
   dataContainer: {
      flexDirection: "column",
      backgroundColor: "white",
      justifyContent: "space-between",
      width: "100%",
      marginVertical: 15,
   },
   aboutTitleText: {
      color: "rgba(0,0,20,0.85)",
      fontFamily: font.MontserratSemiBold,
      fontSize: 18,
      // textTransform: "uppercase",
   },
   aboutText: {
      color: "rgba(0,0,20,0.8)",
      fontFamily: font.QuicksandMedium,
      fontSize: 16,
      marginTop: 5,
      width: "100%",
      alignItems: "flex-start"
   },
});