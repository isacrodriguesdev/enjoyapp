import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { Feather, MaterialIcons } from '~/app/icon';
import { font } from '~/app';
// imports
// types
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackHeaderProps } from '@react-navigation/stack';
// components
import Mount from '~/components/Mount';
import OnlinePoint from '~/components/OnlinePoint';

type Props = {
   user: any,
   navigation: NavigationProp<any>,
};

class Header extends Component<Props> {

   state = {};

   componentDidMount() {
   }

   render() {

      const { navigation } = this.props;

      return (
         <View style={styles.header}>
            <View style={styles.backAndOptionsContainer}>
               <TouchableWithoutFeedback
                  onPress={() => navigation.goBack()}>
                  <MaterialIcons name="chevron-left" size={25}
                     color="rgba(0,0,20,.7)" style={{ padding: 5 }} />
               </TouchableWithoutFeedback>
               <MaterialIcons name="sort"
                  size={25} color="rgba(0,0,20,.7)" />
            </View>

            <View>

               <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                     <View style={styles.contactAvatar}>
                        <Mount render={this.props.user.online}>
                           <OnlinePoint style={{ left: 5 }} />
                        </Mount>
                        <Image source={{ uri: this.props.user.photo }}
                           style={[{width:"100%",height:"100%", borderRadius: styles.contactAvatar.borderRadius}]} />
                     </View>
                     <View style={styles.nameAndVisitContainer}>
                        <Text style={[styles.nameText]}>
                           {this.props.user.name}
                        </Text>
                        {/* <Text style={styles.latestVisitText}>
                           última visita a 50 min
                        </Text> */}
                     </View>
                  </View>

                  <View style={styles.callContainer}>
                     {/* <TouchableWithoutFeedback onPress={() => { }}>
                        <SimpleLineIcons name="phone"
                           size={21}
                           style={{ marginLeft: 25 }}
                           color="rgba(0,0,20,.8)" />
                     </TouchableWithoutFeedback> */}

                     <Mount render={false}>
                        <Feather name="video-off"
                           size={23}
                           style={{ marginLeft: 25 }}
                           color="rgb(10,10,65)" />
                     </Mount>
                     <Mount render={true}>
                        <TouchableWithoutFeedback onPress={() => { }}>
                           <Feather name="video"
                              size={23}
                              style={{ marginLeft: 25 }}
                              color="rgb(10,10,65)" />
                        </TouchableWithoutFeedback>
                     </Mount>
                  </View>
               </View>

            </View>
         </View>
      );
   }
}

export default Header;

const styles = StyleSheet.create({
   header: {
      backgroundColor: "white",
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      paddingHorizontal: 15,
      paddingVertical: 10,
      paddingTop: 5,
      justifyContent: "space-around",
      width: "100%",
      elevation: 1
   },
   backAndOptionsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 20,
      paddingTop: 5
   },
   contactAvatar: {
      width: 42,
      height: 42,
      borderRadius: 100,
      elevation: 2
   },
   nameAndVisitContainer: {
      marginLeft: 10,
      alignItems: "flex-start"
   },
   nameText: {
      fontSize: 17,
      fontFamily: font.SulphurPointBold,
      color: "rgba(0,0,25,0.75)"
   },
   latestVisitText: {
      color: "rgba(0,0,15,0.35)",
      fontFamily: font.MontserratMedium,
      fontSize: 13,
   },
   callContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10
   }
});