import React from 'react';
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import { thirdColors } from '~/app/colors';
// imports
// types
// components

type Props = {
   size?: number,
   style?: StyleProp<TextStyle>
};

export default (props: Props) => {

   const size = { width: props.size, height: props.size };

   return (
      <Text style={[
         styles.online,
         props.style,
         props.size ? size : {},
      ]} />
   );

}

const styles = StyleSheet.create({
   online: {
      position: "absolute",
      backgroundColor: "#4dff4d",
      borderRadius: 50,
      width: 8.5, height: 8.5,
      elevation: 4,
      borderColor: "rgb(255,255,255)",
      borderWidth: 1
   },
});