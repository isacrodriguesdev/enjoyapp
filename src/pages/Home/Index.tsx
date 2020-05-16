// import Realm from 'realm';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// imports
import { screen } from '~/app';
// services
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Header from './Header';
import Card from './Card';
// actions

type Props = {
   navigation: NavigationProp<any>,
   users: object[],
};

class Home extends Component<Props> {

   async onEntryListener() {
   }

   async onMessagesListener() {
   }

   async componentDidMount() {

      this.onEntryListener();
      this.onMessagesListener();
   }

   render() {

      const { props } = this;

      return (
         <View style={styles.container}>
            <Header navigation={props.navigation} />

            <ScrollView>
               <View style={styles.cards}>
                  {props.users.map((item: any, index: number) => (

                     <Card user={item}
                        onPress={() => {
                           this.props.navigation.navigate(screen.PROFILE);
                        }} key={index}
                     />
                  ))}
               </View>
            </ScrollView>
         </View>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      users: state.app.users,
   }
}

const mapDispatchToProps = (dispatch: any) => {

   return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white"
   },
   cards: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
      flexWrap: "wrap",
      paddingHorizontal: 10
   }
});
