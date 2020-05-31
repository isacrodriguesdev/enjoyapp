import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
// imports
import { screenPrimaryColor } from '~/app/colors';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Header from './Header';
import Item from './Item';
// actions
import { getUsersFavorites } from '~/store/duck/contacts';

interface StateProps {
   navigation: NavigationProp<any>;
   contacts: object[];
   favorites: object[];
   matchs: object[];
 }
 
 interface DispatchProps {
   getUsersFavorites(): void;
 }
 
 type Props = StateProps & DispatchProps;

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
         
      console.log(this.props.favorites)
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
      contacts: state.contacts.contacts,
      favorites: state.contacts.favorites,
      matchs: state.contacts.matchs,
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