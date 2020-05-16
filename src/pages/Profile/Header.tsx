import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { width } from '~/app/window';
import { SimpleLineIcons, Feather } from '~/app/icon';
import { font } from '~/app';
// imports
// types
import LinearGradient from 'react-native-linear-gradient';
import { thirdColors } from '~/app/colors';
import Mount from '~/components/Mount';
// components

type Props = {
   user: any
};

export default (props: Props) => {

   const user = props.user;

   const chat = (
      <LinearGradient colors={thirdColors}
         start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
         style={{
            backgroundColor: "white",
            borderRadius: 19,
            width: 47,
            height: 47,
            elevation: 2,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 5
         }}>
         <Feather name="message-circle" size={23}
            color="white"
         />
      </LinearGradient>
   );

   return (
      <View style={styles.container}>
         <View style={styles.dataTopContainer}>

            <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", alignItems: "center" }}>
               <View>
                  <View style={styles.nameAndAgeContainer}>
                     <Text style={styles.nameText}>
                        {user.name}
                     </Text>
                     <Mount render={user.age}>
                        <Text style={[styles.nameText, styles.ageText]}>
                           {", " + user.age}
                        </Text>
                     </Mount>
                  </View>

                  <Mount render={user.profession}>
                     <View style={styles.infoContainer}>
                        <SimpleLineIcons name="briefcase"
                           color={styles.infoText.color} size={14}
                        />
                        <Text style={styles.infoText}>
                           {user.profession}
                        </Text>
                     </View>
                  </Mount>
               </View>
               {chat}
            </View>

         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      width: "100%",
      borderBottomColor: "rgba(0,0,20,.04)",
      borderBottomWidth: 1,
      paddingVertical: 12
   },
   dataTopContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
   },
   nameAndAgeContainer: {
      flexDirection: "row",
      alignItems: "flex-start"
   },
   nameText: {
      color: "rgba(15,0,30,.75)",
      fontSize: 20,
      fontFamily: font.QuicksandBold,
      marginBottom: 1
   },
   ageText: {
      fontFamily: font.QuicksandMedium
   },
   infoContainer: {
      flexDirection: "row",
      alignItems: "center"
   },
   infoText: {
      color: "rgba(0,0,25,.6)",
      fontSize: 14,
      fontFamily: font.MontserratMedium,
      marginLeft: 8,
      marginTop: 2
   },
});