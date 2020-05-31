import { StyleSheet } from 'react-native';
import { font } from '~/app';

export default StyleSheet.create({
   messageContainer: {
      backgroundColor: "white",
      paddingHorizontal: 10,
      paddingVertical: 9,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.01)",
      maxWidth: "85%",
      marginVertical: 2
   },
   messageText: {
      color: "rgba(5,0,15,.8)",
      top: 2,
      fontFamily: font.PoppinsMedium,
   },
})