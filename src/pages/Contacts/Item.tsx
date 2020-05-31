import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// imports
import { font, screen } from '~/app';
import { primaryColor, secundaryColors, thirdColors } from '~/app/colors';
// types
import { NavigationProp } from '@react-navigation/native';
import { User } from '~/types';
// components
import OnlinePoint from '~/components/OnlinePoint';
import Mount from '~/components/Mount';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
   user: {
      name: string,
      photo: string,
      online: boolean,
      lastMessage?: string
   },
   navigation: NavigationProp<any>
};

class Contact extends Component<Props> {

   state = {
      totalUnreadMessages: 0
   };

   render() {

      const { navigate } = this.props.navigation;

      return (
         <TouchableOpacity style={styles.contactContainer}
            activeOpacity={0.5}
            onPress={() => navigate("CONVERSATIONS", { user: this.props.user })}>
            <View style={styles.rowAndCenter}>

               <View>
                  <Image source={{ uri: this.props.user.photo }}
                     style={styles.contactPhoto} />
                  <Mount render={this.props.user.online}>
                     <OnlinePoint style={{ left: 4 }} />
                  </Mount>
               </View>

               <View style={styles.nameAndVisitContainer}>
                  <View style={styles.rowAndCenter}>
                     <Text style={[styles.nameText]}>
                        {this.props.user.name} 
                     </Text>
                  </View>
                  <Mount render={this.props.user.lastMessage}>
                     <View style={styles.latestMessageContainer}>
                        <Text style={[styles.latestMessageText]}>
                           {this.props.user.lastMessage}
                        </Text>
                     </View>
                  </Mount>
               </View>

            </View>

            <Mount render={!!this.state.totalUnreadMessages}>
               <LinearGradient colors={secundaryColors}
                  start={{ x: 2, y: 1 }} end={{ x: 0, y: 1 }}
                  style={[styles.totalMessagesContainer]}>
                  <Text style={styles.totalMessagesText}>
                     {this.state.totalUnreadMessages}
                  </Text>
               </LinearGradient>
            </Mount>

         </TouchableOpacity>
      );
   }
}

export default Contact;

const styles = StyleSheet.create({
   contactContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "white",
      padding: 8,
      paddingHorizontal: 15,
      paddingVertical: 12,
      // borderRadius: 5,
      marginVertical: 1
      // borderBottomColor: "rgba(0,0,0,.03)",
      // borderBottomWidth: 1
   },
   contactPhoto: {
      width: 42,
      height: 42,
      borderRadius: 100,
      borderColor: "rgba(0,0,0,.05)",
      borderWidth: 1
   },
   rowAndCenter: {
      flexDirection: "row", alignItems: "center"
   },
   nameAndVisitContainer: {
      marginLeft: 10,
      alignItems: "flex-start"
   },
   nameText: {
      fontSize: 17,
      fontFamily: font.SulphurPointBold,
      color: "rgb(30,30,60)",
      // top: 2
   },
   latestMessageText: {
      color: "rgba(0,0,0,0.3)",
      fontFamily: font.QuicksandMedium,
      fontSize: 14
   },
   latestMessageContainer: {
      flexDirection: "row",
      alignItems: "center"
   },
   totalMessagesContainer: {
      backgroundColor: primaryColor,
      justifyContent: "center",
      alignItems: "center",
      elevation: 3,
      opacity: 0.9,
      borderRadius: 50,
      width: 25,
      height: 25,
   },
   totalMessagesText: {
      color: "white",
      fontFamily: font.MontserratSemiBold,
      fontSize: 13,
      bottom: 1
   }
});