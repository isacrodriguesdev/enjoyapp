import React from 'react';
import { View, Text, Image } from 'react-native';
// imports
import LinearGradient from 'react-native-linear-gradient';
import { secundaryColors } from '~/app/colors';
import styles from '../styles';
// types
// components

type Props = {
  data: any; // defina o tipo da mensagem mais tarde
  received: boolean;
};

export default (props: Props) => {

  return (
    <View style={[
      { alignItems: props.received ? "flex-end" : "flex-start" },
      styles.marginVertical,
    ]}>
      <LinearGradient colors={props.received ? secundaryColors : ["white", "white"]}
        start={{ x: 1, y: 6 }} end={{ x: 0, y: 2 }}
        style={[{
          maxWidth: "80%",
          width: "100%",
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 5
        }]}>

        <Image style={[{
          width: "100%",
          height: 300,
          borderRadius: 5,
        }]} source={{ uri: props.data.uri }} />

        <Text style={[
          props.received ? styles.messageReceivedText : styles.messageSentText 
        ]}>
          {props.data.content}
        </Text>

      </LinearGradient>
    </View>
  );
}