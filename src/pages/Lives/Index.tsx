import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, ImageBackground, ScrollView, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
// imports
// types
import { User } from '~/types';
import { NavigationProp } from '@react-navigation/native';
import { width, height } from '~/app/window';
import { primaryColor, secundaryColors } from '~/app/colors';
import { font } from '~/app';
import { SimpleLineIcons } from '~/app/icon';
import LinearGradient from 'react-native-linear-gradient';
import { headerStyle } from '~/styles/header';
import AppName from '~/components/AppName';
// components
import Item from './Item';

type Props = {
   navigation: NavigationProp<any>,
   users: User[]
};

class Live extends Component<Props> {

   state = {};

   // layout style

   render() {

      return (
         <View style={styles.container}>

            <View style={headerStyle}>

               <AppName />

               {/* filtro */}
               <TouchableWithoutFeedback>
                  <SimpleLineIcons name="equalizer"
                     style={[styles.icon, styles.iconEqualizer]} />
               </TouchableWithoutFeedback>

            </View>

            <ScrollView>
               <View style={[styles.cards]}>
                  {
                     this.props.users.map((user, index) => {

                        return (
                           <Item user={user} key={index} />
                        );
                     })

                  }
               </View>
            </ScrollView>

            <View style={[styles.buttonLiveContainer]}>
               <LinearGradient colors={secundaryColors}
                  style={[styles.buttonLive]}
                  start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
                  <Text style={styles.buttonLivePointText} />
                  <Text style={styles.buttonLiveText}>Iniciar live</Text>
               </LinearGradient>
            </View>

         </View>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      users: state.profile.users
   }
}

const mapDispatchToProps = (dispatch: any) => {

   return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Live)

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   header: {
      backgroundColor: "white",
      borderBottomColor: "rgba(0,0,0,.05)",
      borderBottomWidth: 1,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 15,
      paddingVertical: 15
   },
   iconEqualizer: {
      transform: [{ rotateZ: '90deg' }]
   },
   icon: {
      fontSize: 20,
      opacity: 0.8,
      color: "rgb(0,0,25)"
   },
   cards: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      flex: 1,
      paddingBottom: 50
      // height: height / 2
   },
   buttonLiveContainer: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
      bottom: 20
   },
   buttonLive: {
      width: width / 1.8,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      paddingVertical: 11,
      // paddingHorizontal: 50,
      borderRadius: 5,
   },
   buttonLiveText: {
      color: "white",
      fontFamily: font.MontserratSemiBold,
      fontSize: 15,
      textTransform: "uppercase"
   },
   buttonLivePointText: {
      backgroundColor: "white",
      borderRadius: 100,
      width: 10, height: 10,
      marginRight: 5, top: 1
   }
});