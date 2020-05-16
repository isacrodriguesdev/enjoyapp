import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons } from '~/app/icon';

import Home from '~/pages/Home/Index';
import Contacts from '~/pages/Contacts/Index';
import Lives from '~/pages/Lives/Index';
import { screen } from '~/app';

const AppBottomTab = createBottomTabNavigator();

const AppTabRoutes = () => (

   <AppBottomTab.Navigator tabBarOptions={{
      showLabel: false,
      tabStyle: { backgroundColor: "white", justifyContent: "center", },
      style: { borderTopColor: "rgba(0,0,0,.08)", borderTopWidth: 1, },
      activeTintColor: "rgb(0,0,55)",
      inactiveTintColor: "rgb(195,195,210)",
   }} initialRouteName={screen.HOME}>
      <AppBottomTab.Screen name="HOME" component={Home}
         options={{
            tabBarIcon: ({ color }) => (
               <SimpleLineIcons name="home" size={20} color={color} />
            )
         }} />

      <AppBottomTab.Screen name="CONTACTS" component={Contacts}
         options={{
            tabBarIcon: ({ color }) => (
               <SimpleLineIcons name="bubble" size={20} color={color} />
            )
         }} />

      <AppBottomTab.Screen name="LIVES" component={Lives}
         options={{
            tabBarIcon: ({ color }) => <SimpleLineIcons name="control-play" size={20} color={color} />
         }} />
   </AppBottomTab.Navigator>
);

export default AppTabRoutes;