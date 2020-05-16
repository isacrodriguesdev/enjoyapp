import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
// imports
import { useAuth } from '~/contexts/auth';
// types
// components

type Props = {};

export default (props: Props) => {

   const { singIn } = useAuth();

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() => {
            singIn("isacsergiodev@gmail.com");
         }} style={{ padding: 20, marginVertical: 10 }}>
            <Text style={{ fontSize: 25 }}>isacsergiodev@gmail.com</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => {
            singIn("marizete2014gyn@hotmail.com");
         }} style={{ padding: 20, marginVertical: 10 }}>
            <Text style={{ fontSize: 25 }}>marizete2014gyn@hotmail.com</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   }
});