import React from 'react';
import { View, Text } from 'react-native';
// imports
import LinearGradient from 'react-native-linear-gradient';
import { secundaryColors } from '~/app/colors';
import styles from './styles';
// types
// components
import MessageText from './Stacks/MessageText';
import MessageImage from './Stacks/MessageImage';

interface Props {
   data: any; // defina o tipo da mensagem mais tarde
   received: boolean; 
};

export default (props: Props) => {

  switch(props.data.type) {
    case "text": 
      return <MessageText data={props.data} received={props.received} />;
    case "image": 
      return <MessageImage data={props.data} received={props.received} />;
    default:
      return null;
  }
}