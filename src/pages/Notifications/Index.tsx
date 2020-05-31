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
         photo: "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/p960x960/67629813_101292491218388_4044543399536099328_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeFff4GAO7ti0KH12x4t5w6cibCq_qXXZU6JsKr-pddlToxIEK-ntCXk5u3hgv9gAf8tea-SvSqlo0PRTl06e_5P&_nc_ohc=J1kzQB_s394AX-V7PN7&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=9b4244e52fb70bfa5e18c4463d44956a&oe=5EF734D4",
         message: " te adicionou aos favoritos"
      },
      {
         name: "Marizete",
         photo: "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/p960x960/70178820_1148274702029452_3851776612932517888_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=AHpfc2wykE4AX-ZzaI9&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=632439a96f176481c5de4422c41f5a4d&oe=5EDB7D9E",
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