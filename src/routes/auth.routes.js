import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screen } from '~/app';

import SignIn from '~/pages/SignIn/Index';

const AuthStack = createStackNavigator();

const AuthStackRoutes = () => (

   <AuthStack.Navigator screenOptions={{
      header: () => null,
      animationEnabled: false,
      gestureEnabled: false,
   }} initialRouteName={screen.SIGNIN.HOME}>
      <AuthStack.Screen name="HOME" component={SignIn} />
   </AuthStack.Navigator>
);

export default AuthStackRoutes;