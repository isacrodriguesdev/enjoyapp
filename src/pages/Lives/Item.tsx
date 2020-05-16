import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { primaryColor } from '~/app/colors';
import { SimpleLineIcons } from '~/app/icon';
import { font } from '~/app';
import { width } from '~/app/window';
// imports
// types
// components

type Props = {
   user: any
};

export default (props: Props) => {

   const user = props.user;

   return (
      <TouchableOpacity style={[styles.card]}>

         <ImageBackground style={styles.cardBackground}
            imageStyle={{
               borderRadius: styles.card.borderRadius
            }} source={{ uri: user.photo }}>

            <View style={{
               alignItems: "center",
               top: 8,
               elevation: 5
            }}>
               <View style={styles.watchingNowContainer}>
                  <SimpleLineIcons name="eye"
                     style={styles.watchingNowIcon}
                     size={13} />
                  <Text style={styles.watchingNowText}>
                     {(Math.random() * 1000).toFixed(0)}
                  </Text>
               </View>
            </View>
         </ImageBackground>

         <View style={{ alignItems: "center" }}>
            <Text style={styles.userNameText}>
               {user.name}
            </Text>
         </View>

      </TouchableOpacity>
   );
}

const cardSpacing = 10;

const styles = StyleSheet.create({
   card: {
      borderRadius: 25,
      elevation: 1,
      width: (width / 4.2),
      height: (width / 4.2),
      marginHorizontal: cardSpacing,
      marginVertical: cardSpacing * 2.4
   },
   cardBackground: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
      marginBottom: 12
   },
   userNameText: {
      fontFamily: font.PoppinsMedium,
      color: "rgba(0,0,25,.85)",
      fontSize: 13
   },
   watchingNowContainer: {
      backgroundColor: primaryColor,
      paddingHorizontal: 7,
      paddingVertical: 3,
      borderRadius: 100,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      elevation: 3,
   },
   watchingNowIcon: {
      marginRight: 3,
      color: "white"
   }, 
   watchingNowText: {
      color: "white",
      fontSize: 10,
      fontFamily: font.MontserratMedium
   }
});