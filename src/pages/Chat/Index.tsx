import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, Keyboard, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// imports
import { font } from '~/app';
import { screenPrimaryColor } from '~/app/colors';
// services
// types
import { NavigationProp } from '@react-navigation/native';
// actions
import { getMessages, unmontMessages } from '~/store/duck/chat';
// components
import Header from './Header';
import Input from './Input';

type Props = {
   navigation: NavigationProp<any>,
   route: any,
   messages: [],
   unmontMessages: () => void
};

class Chat extends Component<Props> {

   keyboardListener: any;
   refs: any;

   state = {
      heightScroll: 0,
      positionScroll: 0, // off
   };

   onKeyboardListener() {
      this.keyboardListener = Keyboard.addListener("keyboardDidShow", () => {
         this.refs.chat.scrollToOffset({
            offset: this.state.heightScroll,
            animated: false
         });
      })
   }

   componentDidMount() {

      this.onKeyboardListener();
   }

   componentWillUnmount() {

      Keyboard.dismiss();
      this.props.unmontMessages(); // limpar o chat no redux
      this.keyboardListener.remove();
   }

   // renders

   render() {

      const user = this.props.route.params.user;

      return (
         <View style={styles.container}>

            <Header user={user} navigation={this.props.navigation} />

            <FlatList
               ref="chat"
               onContentSizeChange={(_, heightScroll) => {
                  this.setState({ heightScroll });
                  this.refs.chat.scrollToEnd({ animated: false })
               }}
               style={styles.messagesContainer}
               data={this.props.messages}
               keyExtractor={(_, index) => index.toString()}
               renderItem={({ item }: any) => (
                  <Text>{item.content}</Text>
               )}
            />

            <Input user={user} />

         </View>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      messages: state.chat.messages,
   }
}

const mapDispatchToProps = (dispatch: any) => {

   return bindActionCreators({ getMessages, unmontMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: screenPrimaryColor
   },
   messagesContainer: {
      paddingHorizontal: 30,
   },
   messageContainer: {
      backgroundColor: "white",
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.01)",
      maxWidth: "85%",
      marginVertical: 7
   },
   messageText: {
      color: "rgba(0,0,10,.65)",
      fontFamily: font.MontserratMedium
   },


});