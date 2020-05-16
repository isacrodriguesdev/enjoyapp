import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
// styles
import { headerStyle, headerIconStyle } from '~/styles/header';
// imports
import { screen } from '~/app';
import { SimpleLineIcons } from '~/app/icon';
import AppName from '~/components/AppName';
// types
import { NavigationProp } from '@react-navigation/native';
import Total from '~/components/Total';
// components

type Props = {
   // openFilter?: (event?: GestureResponderEvent) => void
   navigation: NavigationProp<any>
};

export default (props: Props) => {

   const { navigate } = props.navigation;

   return (
      <View style={headerStyle}>

         <View style={styles.actionsContainer}>
            <TouchableOpacity
               style={{ marginRight: 35 }}
               activeOpacity={0.5}
               onPress={() => console.log("OPEN_USER_SCREEN")}>
               <SimpleLineIcons name="user"
                  style={[headerIconStyle]} />
            </TouchableOpacity>

            <TouchableOpacity
               activeOpacity={0.5}
               onPress={() => console.log("RELOAD")}>
               <SimpleLineIcons name="reload"
                  style={[headerIconStyle]} />
            </TouchableOpacity>
         </View>

         <AppName />

         <View style={styles.actionsContainer}>
            <TouchableOpacity
               style={{ marginRight: 35 }}
               activeOpacity={0.5}
               onPress={() => navigate(screen.NOTIFICATIONS)}>

               {/* total de notificações */}
               <Total value={0} />

               <SimpleLineIcons name="bell"
                  style={[headerIconStyle]} />
            </TouchableOpacity>

            <TouchableWithoutFeedback
               onPress={() => console.log("OPEN_FILTERS_SCREEN")}>
               <SimpleLineIcons name="equalizer"
                  style={[headerIconStyle, styles.iconEqualizer]} />
            </TouchableWithoutFeedback>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      height: 55,
      width: "100%",
      borderBottomColor: "rgba(0,0,0,0.05)",
      borderBottomWidth: 1,
      paddingHorizontal: 15
   },
   actionsContainer: { flexDirection: "row" },
   icon: {
      fontSize: 20,
      opacity: 0.8,
      color: "rgb(0,0,25)"
   },
   iconEqualizer: {
      transform: [{ rotateZ: '90deg' }]
   }
});