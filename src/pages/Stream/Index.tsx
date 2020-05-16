import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// imports
// types
// components

type Props = {};

export default (props: Props) => {

   return (
      <View style={styles.container}>
         <Text>Changed</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {}
});