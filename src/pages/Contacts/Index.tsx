import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
// imports
import { screenPrimaryColor } from '~/app/colors';
// types
import { NavigationProp } from '@react-navigation/native';
// components
// actions
import { getUsersFavorites } from '~/store/duck/contacts';
import Header from './Header';
import Item from './Item';

type Props = {
   navigation: NavigationProp<any>,
   contacts: object[],
   favorites: object[],
   matchs: object[],
   getUsersFavorites: () => void
};

class Contacts extends Component<Props> {

   state = {
      option: "favorites"
   };

   handleChangeOption() {

   }

   componentDidMount() {

      switch (this.state.option) {
         case "favorites":
            this.props.getUsersFavorites();
            break;
         default: 
            return;
      }
   }

   render() {

      return (
         <View style={styles.container}>

            <Header navigation={this.props.navigation} />

            <FlatList
               style={styles.contactList}
               data={this.props.favorites}
               keyExtractor={(_, index) => index.toString()}
               renderItem={({ item }: any) => <Item user={item.favorited}
                  navigation={this.props.navigation} />
               }
            />
         </View>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      contacts: state.users.contacts,
      favorites: state.users.favorites,
      matchs: state.users.matchs,
   }
}

const mapDispatchToProps = (dispatch: any) => {

   return bindActionCreators({
      getUsersFavorites
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: screenPrimaryColor
   },
   contactList: {
      // paddingHorizontal: 10,
   }

});