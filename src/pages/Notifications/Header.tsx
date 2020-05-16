import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
// imports
import { headerStyle } from '~/styles/header';
import { font } from '~/app';
import { width } from '~/app/window';
import { Fontisto } from '~/app/icon';
// types
import { NavigationProp } from '@react-navigation/native';
// components

type Props = {
   navigation: NavigationProp<any>
};

export default (props: Props) => {

   return (
      <View style={[headerStyle, styles.container]}>
         <TouchableWithoutFeedback
            onPress={() => props.navigation.goBack()}>
            <View style={{ paddingHorizontal: 5, zIndex: 2 }}>
               <Fontisto
                  name="angle-left"
                  size={16} color="rgba(10,0,30,.8)" />
            </View>
         </TouchableWithoutFeedback>
         <Text style={styles.titleText}>Notificações</Text>
         <Text />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      height: 60
   },
   titleText: {
      fontFamily: font.MontserratSemiBold,
      fontSize: 15,
      position: "absolute",
      textAlign: "center",
      width: width,
      textTransform: "uppercase",
      color: "rgba(10,0,30,.8)",
   }
});