import React from 'react';
import { View, Text } from 'react-native';
// imports
import styles from './styles';
import { primaryColor, secundaryColors, primaryColors, thirdColors } from '~/app/colors';
// types
import { MessageResponse } from '~/types';
import LinearGradient from 'react-native-linear-gradient';
// components

type Props = {
   data: MessageResponse
};

export default (props: Props) => {

   return (
      <View style={{ alignItems: "flex-end" }}>
         <LinearGradient colors={secundaryColors}
            start={{x: 1, y: 6}} end={{x: 0, y: 2}}
            style={[styles.messageContainer, {
               borderBottomRightRadius: 15,
               borderWidth: 0
            }]}>
            <Text style={[styles.messageText, { color: "white" }]}>
               {props.data.content}
            </Text>
         </LinearGradient>
      </View>
   );
}