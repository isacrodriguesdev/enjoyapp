import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Animated, Text, TouchableWithoutFeedback } from 'react-native';
import { Fontisto } from '~/app/icon';
import { height, width } from '~/app/window';
import { NavigationProp } from '@react-navigation/native';
import AppName from '~/components/AppName';
import { font } from '~/app';
import { secundaryColors, primaryColors } from '~/app/colors';
// imports
// types
// components

type Props = {
   navigation: NavigationProp<any>
};

export default class Header extends Component<Props> {

   selectionOptions = {
      favorites: "favorites",
      contacts: "contacts",
      matchs: "matchs"
   };

   state = {
      selectedOption: this.selectionOptions.contacts
   };

   searchTranslationX = new Animated.Value(width);

   inputSearchOpen = Animated.timing(this.searchTranslationX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
   });

   inputSearchClose = Animated.timing(this.searchTranslationX, {
      toValue: width,
      duration: 200,
      useNativeDriver: true,
   })

   componentDidMount() {
   }

   render() {

      const { contacts, matchs, favorites } = this.selectionOptions;

      return (
         <View style={styles.container}>

            <View style={styles.topContainer}>

               <AppName />

               <TouchableWithoutFeedback
                  onPress={() => this.inputSearchOpen.start()}>
                  <View style={styles.backAndOptionsContainer}>
                     <Fontisto name="search" size={16}
                        style={{ paddingHorizontal: 5, paddingVertical: 5 }}
                        color="rgba(0,0,25,.8)" />
                  </View>
               </TouchableWithoutFeedback>

            </View>

            <Animated.View style={[styles.inputSearchAnimated, {
               transform: [{
                  translateX: this.searchTranslationX
               }]
            }]}>

               <View style={styles.inputSearchContainer}>
                  <TextInput
                     style={styles.inputSearchEntry}
                     placeholder="Pesquisar" />

                  <TouchableWithoutFeedback
                     onPress={() => this.inputSearchClose.start()}>
                     <Fontisto name="close-a"
                        style={{ paddingHorizontal: styles.inputSearchContainer.paddingLeft }}
                        size={14}
                        color="#f58da6" />
                  </TouchableWithoutFeedback>
               </View>

            </Animated.View>

            <View style={styles.selectionContainer}>

               <TouchableWithoutFeedback onPress={() => {
                  this.setState({
                     selectedOption: contacts
                  });
               }}>
                  <View style={[
                     styles.buttonSelection,
                     this.state.selectedOption === contacts && styles.buttonSelectedContainer
                  ]}>
                     <Text style={[
                        styles.buttonSelectionText,
                        this.state.selectedOption === contacts && styles.buttonSelectedText
                     ]}>
                        Contatos
                  </Text>
                  </View>
               </TouchableWithoutFeedback>

               <TouchableWithoutFeedback onPress={() => {
                  this.setState({
                     selectedOption: this.selectionOptions.favorites
                  });
               }}>
                  <View style={[
                     styles.buttonSelection,
                     this.state.selectedOption === favorites && styles.buttonSelectedContainer
                  ]}>
                     <Text style={[
                        styles.buttonSelectionText,
                        this.state.selectedOption === favorites && styles.buttonSelectedText
                     ]}>
                        Favoritos
                     </Text>
                  </View>
               </TouchableWithoutFeedback>

               <TouchableWithoutFeedback onPress={() => {
                  this.setState({
                     selectedOption: this.selectionOptions.matchs
                  });
               }}>
                  <View style={[
                     styles.buttonSelection,
                     this.state.selectedOption === matchs && styles.buttonSelectedContainer
                  ]}>
                     <Text style={[
                        styles.buttonSelectionText,
                        this.state.selectedOption === matchs && styles.buttonSelectedText
                     ]}>
                        Matchs
                     </Text>
                  </View>
               </TouchableWithoutFeedback>

               <Text style={{ marginHorizontal: 10 }} />
            </View>

         </View>
      );

   }
}

const horizontalAndVertical = 10;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      paddingHorizontal: 15,
      paddingTop: horizontalAndVertical,
      justifyContent: "space-between",
      alignItems: "center",
      borderColor: "rgba(0,0,0,0.03)",
      borderWidth: 1,
      marginBottom: 5
   },
   topContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
   },
   backAndOptionsContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
   },
   inputSearchAnimated: {
      position: "absolute",
      width: width,
      top: -1,
   },
   inputSearchContainer: {
      backgroundColor: "white",
      flexDirection: "row",
      paddingLeft: 20,
      justifyContent: "space-between",
      alignItems: "center",
      elevation: 5,
      paddingVertical: 2
   },
   inputSearchEntry: {
      fontFamily: font.MontserratMedium,
      fontSize: 15,
      flex: 1,
   },
   selectionContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginTop: 20,
      alignItems: "flex-end"
   },
   buttonSelection: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      borderBottomWidth: 2,
      borderBottomColor: "transparent",
   },
   buttonSelectionText: {
      color: "rgba(0,0,30,.4)",
      fontSize: 12,
      fontFamily: font.PoppinsSemiBold,
      textTransform: "uppercase"
   },
   buttonSelectedContainer: {
      borderBottomWidth: 2,
      borderBottomColor: "rgb(0,0,70)",
   },
   buttonSelectedText: {
      color: "rgb(0,0,70)",
   }
});