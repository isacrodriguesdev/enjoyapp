import React from 'react';
import { View, Text } from 'react-native';
// imports
import styles from './styles';
// types
import { Message } from '~/types';
// components

type Props = {
   data: Message
};

export default (props: Props) => {

   return (
      <View style={{ alignItems: "flex-start" }}>
         <View style={[styles.messageContainer, {
            borderBottomLeftRadius: 15
         }]}>
            <Text style={[styles.messageText]}>
               {props.data.content}
            </Text>
         </View>
      </View>
   );
}