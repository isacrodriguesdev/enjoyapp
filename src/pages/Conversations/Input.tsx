import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// imports
import { font } from '~/app';
import { SimpleLineIcons, FontAwesome } from '~/app/icon';
import { secundaryColors } from '~/app/colors';
import { getUserId, getUserToken } from '~/services/account';
import Message from '~/messenger/Message';
// types
// actions
import { } from '~/store/duck/chat';
// components
import Mount from '~/components/Mount';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import socket from '~/services/socket';

type Props = {
   user: any
};

class Input extends Component<Props> {

   state = {
      messageText: "",
      sent: false,
      ownerId: null
   };

   async componentDidMount() {

      this.onChangeMessageText();

      const ownerId = await getUserId();
      if (ownerId)
         this.setState({ ownerId: parseInt(ownerId) })
   }

   onChangeMessageText() {
      this.state.messageText.trim().length && this.setState({ sent: true });
   }

   // actions
   async handleSendMessage() {

      // send message
      // new Message({
      //    user: {
      //       id: this.props.user.id,
      //       connectionId: this.props.user.conn
      //    },
      //    message: {
      //       type: "text",
      //       from: this.state.ownerId,
      //       content: this.state.messageText,
      //       sentAt: Date.now(),
      //    }
      // }).send()

      socket.emit("message", {
         type: "text",
         from: this.state.ownerId,
         content: this.state.messageText,
         sentAt: Date.now(),
      })

      this.setState({ messageText: "" });
   }

   render() {

      return (
         <View style={styles.entryActionsContainer}>
            <View style={styles.entryTextAndClipContainer}>

               <TouchableNativeFeedback
                  onPress={() => console.log("OPEN_GALERY_SENT_MEDIA")}>
                  <LinearGradient colors={secundaryColors}
                     start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                     style={{ padding: 11, borderRadius: 100, }}>
                     <FontAwesome name="camera"
                        style={{}}
                        size={17} color="white" />
                  </LinearGradient>
               </TouchableNativeFeedback>

               <TextInput placeholder="Envie uma mensagem"
                  style={styles.inputText}
                  onChangeText={text => this.setState({ messageText: text })}
                  onChange={({ nativeEvent }) => {
                     if (nativeEvent.text.length === 0)
                        this.setState({ sent: false });
                     else
                        this.setState({ sent: true })
                  }}
                  value={this.state.messageText}
                  multiline={true} />

               <Mount render={!this.state.sent}>
                  <TouchableOpacity
                     style={{ paddingHorizontal: 15 }}
                     onPressIn={() => console.log("START_AUDIO_MICROPHONE")}
                     onPressOut={() => console.log("STOP_AUDIO_MICROPHONE")}>
                     <SimpleLineIcons name="microphone"
                        size={22} color="rgba(10,0,30,.95)" />
                  </TouchableOpacity>
               </Mount>

               <Mount render={this.state.sent}>
                  <TouchableOpacity
                     style={{ paddingHorizontal: 15 }}
                     onPress={this.handleSendMessage.bind(this)}>
                     <SimpleLineIcons name="paper-plane"
                        style={{ transform: [{ rotateZ: "45deg" }], right: 2 }}
                        size={22} color="rgba(10,0,30,.95)" />
                  </TouchableOpacity>
               </Mount>

            </View>
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

   return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)

const styles = StyleSheet.create({
   microphoneAndSentContainer: {
      borderRadius: 100,
      padding: 15,
      marginLeft: 0,
      elevation: 5
   },
   entryActionsContainer: {
      marginHorizontal: 12,
      marginVertical: 6,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "flex-end",
   },
   entryTextAndClipContainer: {
      backgroundColor: "white",
      paddingLeft: 5,
      paddingVertical: 0,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.02)",
      flexDirection: "row",
      alignItems: "center",
      flex: 1
   },
   inputText: {
      flex: 1,
      color: "rgba(10,0,30,.95)",
      fontFamily: font.MontserratMedium,
      marginLeft: 5,
      fontSize: 15,
      top: 1.5
   }
});

{/* <Mount render={!sent}>
               <SimpleLineIcons name="microphone"
                  size={20} color="white" />
            </Mount>

            <Mount render={sent}>
               <SimpleLineIcons name="paper-plane"
                  style={{ transform: [{ rotateZ: "45deg" }], right: 2 }}
                  size={20} color="white" />
            </Mount> */}