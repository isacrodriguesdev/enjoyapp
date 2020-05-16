import React from 'react';
import { View, StyleSheet, Image, Text, GestureResponderEvent } from 'react-native';
import { width } from '~/app/window';
import { font } from '~/app';
import { TouchableOpacity } from 'react-native-gesture-handler';
// imports
// types
// components

type Props = {
   data: {
      id: number,
      name: string,
      photo: string,
      message: string
   },
   onPress?: (event?: GestureResponderEvent) => void
};

export default (props: Props) => {

   return (
      <TouchableOpacity 
         style={styles.container}
         onPress={props.onPress}>
         <View style={styles.imageContainer}>
            <Image source={{ uri: props.data.photo }}
               style={styles.image} />
         </View>

         <View style={[styles.messageContainer, {
            paddingLeft: styles.container.paddingLeft / 2,
            paddingRight: styles.container.paddingLeft,
         }]}>
            <Text style={styles.messageText} textBreakStrategy="simple">
               <Text style={[styles.messageText, styles.messageNameText]}>
                  {props.data.name}
               </Text>
               {props.data.message}
            </Text>
            <Text style={styles.howLongText}>1 hora atrás</Text>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      width,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      paddingLeft: 20,
      marginVertical: 10
   },
   imageContainer: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: "100%",
   },
   messageContainer: {
      flex: 1,
      alignItems: "flex-start",

   },
   messageText: {
      fontSize: 14,
      fontFamily: font.MontserratMedium,
      color: "rgba(0,0,10,0.8)",
   },
   messageNameText: {
      fontFamily: font.MontserratSemiBold
   },
   howLongText: {
      color: "rgba(0,0,10,.3)",
      fontFamily: font.MontserratMedium,
      fontSize: 12
   },
   image: {
      width: 45, height: 45,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,.08)"
   }
});