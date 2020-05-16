import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
// imports
import { width, height } from '~/app/window';
import { font } from '~/app';
import { MaterialIcons } from '~/app/icon';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Mount from '~/components/Mount';
import Header from './Header';
import Description from './Description';
import About from './About';
// import Location from './Location';
import OptionsBottom from './OptionsBottom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

type Props = {
   navigation: NavigationProp<any>,
   route: any,
   profile: any
};

type SizeImage = { width: number, height: number };

class Profile extends Component<Props> {

   initialState = {
      albumContainerWidth: 0,
   }

   state: any = this.initialState;

   private applySizeImage(): SizeImage {

      const { albumContainerWidth } = this.state;
      let size: number = (albumContainerWidth / 3) - 8;

      return {
         width: (size),
         height: (size)
      }
   }

   render() {

      const user = this.props.profile;
      const { navigation } = this.props;

      return (
         <View style={styles.profile}>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 0 }}>

               <ImageBackground source={{ uri: user.photo }}
                  style={[styles.photo]}>
                  <MaterialIcons name="sort"
                     size={30} color="white"
                     style={styles.optionsIconAction}
                  />
               </ImageBackground>

               <View style={styles.container}>

                  <Header user={user} />
                  <Description descriptionPhrase={user.descriptionPhrase}
                     text={user.description}
                  />

                  {/* <View style={styles.beforeDescriptionContainer}>
                     <Location local="Gôiania/GO"
                        distance={user.distance} />
                  </View> */}

                  {/* <View style={user.photos && user.photos.length ? {}: {
                     marginVertical: 20,
                     borderBottomWidth: 1,
                     borderBottomColor: "rgba(0,0,0,.05)"
                  }} /> */}

                  {/* 

                     PLANO;
                  
                     MOSTRE A QUANTIDADE DE MATCHS JÁ GANHOS
                     QUANTAS MOEDAS JÁ GANHOU 
                     ETC....
                  
                  */}

                  <Mount render={user.photos && user.photos.length}>
                     <View style={styles.photosAlbumContainer}
                        onLayout={async ({ nativeEvent }) => {
                           await this.setState({
                              albumContainerWidth: nativeEvent.layout.width
                           });
                        }}>

                        <FlatList horizontal={true}
                           contentContainerStyle={{
                              paddingVertical: 5
                           }}
                           data={user.photos}
                           keyExtractor={(_, index) => index.toString()}
                           renderItem={({ item }) => (
                              <TouchableWithoutFeedback
                                 onPress={() => console.log("OPEN_IMAGE")}>
                                 <View style={[styles.photoAlbumItem, styles.photosAlbumItemContainer]}>
                                    <Image source={{ uri: item }}
                                       style={[
                                          styles.photoAlbumItem,
                                          this.applySizeImage()
                                       ]} />
                                 </View>
                              </TouchableWithoutFeedback>
                           )}
                        />
                     </View>
                  </Mount>

                  <Mount render={user.sexualOrientation}>
                     <About label="Orientação"
                        value={user.sexualOrientation} />
                  </Mount>

                  <Mount render={user.children}>
                     <About label="Filhos"
                        value={user.children} />
                  </Mount>

                  <Mount render={user.searching}>
                     <About label="Procurando"
                        value={user.searching} />
                  </Mount>

                  <Mount render={user.relationshipStatus}>
                     <About label="Status"
                        value={user.relationshipStatus} />
                  </Mount>

                  <Mount render={user.bodyHeight}>
                     <About label="Altura"
                        value={user.bodyHeight + "cm"} />
                  </Mount>

               </View>

               <View style={{ height: width / 3.3 }} />

            </ScrollView>

            <OptionsBottom navigation={navigation} user={{
               favorited: user.favorited,
               heart: user.heart,
               userFavoritedId: user.id
            }} />

         </View>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      profile: state.app.profile,
   }
}

const mapDispatchToProps = (dispatch: any) => {
   return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const styles = StyleSheet.create({
   profile: {
      flex: 1,
      backgroundColor: "white",
   },
   container: {
      backgroundColor: "white",
      width: "100%",
      transform: [{ translateY: -40 }],
      borderRadius: 30,
      paddingHorizontal: 20,
      paddingBottom: 10,
      // elevation: 2
   },
   photo: {
      width: "100%",
      height: (height / 1.5),
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: 20
   },
   aboutTitleText: {
      color: "rgba(0,0,25,.8)",
      fontFamily: font.MontserratSemiBold,
      fontSize: 15,
      marginBottom: 0
   },
   photosAlbumContainer: {
      marginBottom: 20,
      flexDirection: "row",
      flexWrap: "wrap",
   },
   photosAlbumItemContainer: {
      elevation: 3,
      marginHorizontal: 4,
   },
   photoAlbumItem: {
      borderRadius: 5,
   },
   optionsIconAction: {
      textShadowColor: "rgba(0,0,0,.8)",
      textShadowOffset: { height: 1, width: 0 },
      textShadowRadius: 5,
   },
   beforeDescriptionContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   }
   // 
});