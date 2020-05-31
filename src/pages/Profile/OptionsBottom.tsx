import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// imports
import { FontAwesome, FontAwesome5 } from '~/app/icon';
import { primaryColors, secundaryColors } from '~/app/colors';
// types
import { NavigationProp } from '@react-navigation/native';
// actions
import {addUserFavorites} from '~/store/duck/profile';
// components
import Mount from '~/components/Mount';

interface ProfileProps {
   userFavoritedId: number;
   favorited: boolean;
   heart: boolean;
}

interface StateProps {
   navigation: NavigationProp<any>;
 }
 
interface DispatchProps {}
 
type Props = StateProps & DispatchProps;

export default (props: Props) => {

   const { goBack } = props.navigation;

   // redux
   const dispatch = useDispatch();
   const profile: ProfileProps = useSelector((state: any) => state.profile.profile);

   // state
   const [heart, setHeart] = useState(false);
   const [favorited, setFavorited] = useState(false);

   useEffect(() => {

      setFavorited(profile.favorited);
      setHeart(profile.heart);

   }, []);

   function handleHeart() {

      if (heart) {
      } else {
      };
   };

   function handleFavorite() {

      dispatch(addUserFavorites(profile.userFavoritedId))
      // if (favorited) {
      // } else {
      // };
   };

   return (
      <View style={styles.container}>

         <TouchableOpacity onPress={() => goBack()}
            style={[styles.tabBottomItem]}>
            <Image
               source={require('~/assets/images/icons/cancel.png')}
               style={{ width: 16, height: 16 }}
            />
         </TouchableOpacity>

         <TouchableWithoutFeedback onPress={() => handleHeart()}>
            <LinearGradient colors={primaryColors}
               start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
               style={[styles.tabBottomItem]}>

               <Mount render={!heart}>
                  <FontAwesome5 name="heart" color="white"
                     size={22} style={styles.tabBottomHeartIconItem} />
               </Mount>

               <Mount render={heart}>
                  <FontAwesome name="heart" color="white"
                     size={22} style={styles.tabBottomHeartIconItem} />
               </Mount>

            </LinearGradient>
         </TouchableWithoutFeedback>

         <TouchableWithoutFeedback onPress={() => handleFavorite()}>
            <LinearGradient colors={secundaryColors}
               start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
               style={styles.tabBottomItem}>

               <Mount render={!favorited}>
                  <FontAwesome5 name="star" color="white"
                     size={22} />
               </Mount>

               <Mount render={favorited}>
                  <FontAwesome name="star" color="white"
                     size={24} style={{ top: 1 }} />
               </Mount>


            </LinearGradient>
         </TouchableWithoutFeedback>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
      bottom: 10,
      zIndex: 1,
   },
   tabBottomItem: {
      backgroundColor: "white",
      borderRadius: 100,
      width: 56,
      height: 56,
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8
   },
   tabBottomHeartItem: {
      height: 65,
      width: 65
   },
   tabBottomHeartIconItem: { top: 2 }
});