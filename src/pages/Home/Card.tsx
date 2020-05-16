import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
// imports
import { width } from '~/app/window';
import { font } from '~/app';
// images
// types
// components
import Mount from '~/components/Mount';
import OnlinePoint from '~/components/OnlinePoint';

type Props = {
   user: any,
   onPress: (event?: GestureResponderEvent) => void
};

class Card extends Component<Props> {

   state = {};

   render() {

      return (
         <TouchableOpacity style={styles.container}
            activeOpacity={0.5}
            onPress={this.props.onPress}>
            <ImageBackground source={{ uri: this.props.user.photo }}
               imageStyle={styles.imageBackgroundCard}
               style={styles.card}>

               <View style={styles.liveContainer}>
                  <Mount render={this.props.user.live}>
                     <Text style={styles.onlineLiveText}>ao-vivo</Text>
                  </Mount>
               </View>

               <View style={styles.infoBottomContainer}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                     <Text style={styles.nameText}>
                        {this.props.user.name}
                     </Text>
                     <Mount render={this.props.user.online}>
                        <OnlinePoint size={6.2}
                           style={{
                              borderWidth: 0,
                              position: "relative",
                              marginLeft: 4
                           }}
                        />
                     </Mount>
                  </View>
                  <Text style={styles.distanceText}>
                     {this.props.user.location}
                  </Text>
               </View>

            </ImageBackground>
         </TouchableOpacity>
      );
   }
}

export default Card;

const containerBorderRadius = 5;

const styles = StyleSheet.create({
   container: {
      width: "48.65%",
      height: width / 2,
      borderRadius: containerBorderRadius,
      marginBottom: 10,
      elevation: 2,
   },
   card: {
      width: "100%",
      height: "100%",
      justifyContent: "space-between"
   },
   nameText: {
      color: "white",
      fontSize: 18,
      fontFamily: font.MontserratMedium,
      textShadowColor: "#000",
      textShadowOffset: { height: 1, width: 1 },
      textShadowRadius: 5,
      alignItems: "flex-start",
      bottom: 2
   },
   distanceText: {
      color: "white",
      fontSize: 13,
      fontFamily: font.QuicksandMedium,
      bottom: 6,
      textShadowColor: "#000",
      textShadowOffset: { height: 1, width: 1 },
      textShadowRadius: 5,
   },
   liveContainer: {
      marginLeft: 8,
      marginTop: 8,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
   },
   onlineLiveText: {
      color: "white",
      fontSize: 13,
      fontFamily: font.QuicksandSemiBold,
      textShadowColor: "#000",
      textShadowOffset: { height: 1, width: 1 },
      textShadowRadius: 5,
      bottom: 2.5
   },
   infoBottomContainer: {
      marginLeft: 12,
      marginBottom: 5,
      alignItems: "flex-start"
   },
   imageBackgroundCard: {
      borderRadius: containerBorderRadius,
      padding: 10
   }
});