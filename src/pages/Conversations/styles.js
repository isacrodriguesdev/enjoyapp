import { StyleSheet } from 'react-native';
import { font } from '~/app';

const styles = StyleSheet.create({
   messageTextContainer: {
      backgroundColor: "white",
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.01)",
      maxWidth: "85%",
   },
   messageText: {
      color: "rgba(5,0,15,.8)",
      top: 0,
      fontFamily: font.QuicksandSemiBold,
   },
})

export default StyleSheet.create({
   // received text
   messageReceivedTextContainer: {
      ...styles.messageTextContainer,
      borderBottomRightRadius: 15,
      borderWidth: 0
   },
   messageReceivedText: {
      ...styles.messageText,
      color: "white" 
   },
   // sent text
   messageSentTextContainer: {
      ...styles.messageTextContainer,
      borderBottomLeftRadius: 15
   },
   messageSentText: {
      ...styles.messageText
   },
   // image
   messageImageContainer: {
      maxWidth: "80%",
      maxHeight: 300,
      width: "100%", 
      height: "100%", 
      backgroundColor: "white",
   },
   messageImage: {
      width: "100%", 
      height: "100%", 
   },
   marginVertical: {
      marginVertical: 3
   }
})