import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
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

type Style = StyleProp<ViewStyle>;

export default (props: Props) => {

  // styles
  function handleSideStyle(): Style[] {
    return [
      { alignItems: props.received ? "flex-end" : "flex-start" }, 
      styles.marginVertical,
    ];
  }

  function handleContainerStyle(): Style[] {
    return [
      props.received ? styles.messageReceivedTextContainer : styles.messageReceivedTextContainer
    ];
  }

  function handleTextContainerStyle(): Style[] {
    return [
      props.received ? styles.messageReceivedText : styles.messageSentText
    ];
  }

  return (
    <View style={handleSideStyle()}>
      <LinearGradient colors={props.received ? secundaryColors : ["white", "white"]}
        start={{ x: 1, y: 6 }} end={{ x: 0, y: 2 }}
        style={handleContainerStyle()}>
        <Text style={handleTextContainerStyle()}>
          {props.data.content}
        </Text>
      </LinearGradient>
    </View>
  );
}