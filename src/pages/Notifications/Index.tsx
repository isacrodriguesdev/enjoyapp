import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// imports
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Header from './Header';
import Item from './Item';

type Props = {
   navigation: NavigationProp<any>
};

export default (props: Props) => {

   const nots = [
      {
         name: "Aline",
         photo: "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/s960x960/70806504_1560998657373423_3807280124680732672_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=54JDCXdI4zkAX_jLh2h&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=7&oh=ec6b6caec0358fb640a9cababaa7b076&oe=5EC89236",
         message: " te adicionou aos favoritos"
      },
      {
         name: "Marizete",
         photo: "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/p960x960/70178820_1148274702029452_3851776612932517888_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=HiShf7SkxNIAX-tB7Mf&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=4f77e44b3d91edaacb7a7c12fa222623&oe=5EC7B71E",
         message: " adicionou novas fotos"
      }
   ]

   return (
      <View style={styles.container}>
         <Header navigation={props.navigation} />
         <FlatList
            data={nots}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
               <Item data={{ ...item, id: 1 }} />
            )}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   }
});