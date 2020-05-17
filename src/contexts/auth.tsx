import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { secundaryColor } from '~/app/colors';

const AuthContext = createContext({
   signed: false,
   singIn: (email: string) => { }
});

export function useAuth() {

   return useContext(AuthContext);
}

export default function AuthProvider({ children }: any) {

   const [loading, setLoading] = useState(true);
   const [signed, setSigned] = useState(false);

   useEffect(() => {
      // AsyncStorage.clear();
      isLogged();
   }, [])

   // verificar se o usúario esta autenticado
   async function isLogged() {
      const userId = await AsyncStorage.getItem("@userId");
      const token = await AsyncStorage.getItem("@token");

      if (token && userId) {
         axios.defaults.headers.authorization = token;
         setLoading(false);
         setSigned(true);
      }

      setLoading(false);
      return;
   }

   // autenticar
   async function singIn(email: string) {

      setLoading(true);

      // API Request
      const response = await axios.post("/login", {
         email: email
      })

      const token: string = response.data.token;

      if (token) {
         AsyncStorage.setItem("@userId", response.data.user.id.toString());
         AsyncStorage.setItem("@token", token);
         axios.defaults.headers.authorization = token;
         
         setLoading(false);
         setSigned(true);
      }
   }
   // Animação de tela de carregamento
   if (loading) {
      return (
         <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
            <ActivityIndicator size="large" color={secundaryColor} />
         </View>
      );
   }

   return (
      <AuthContext.Provider value={{ signed, singIn }}>
         {children}
      </AuthContext.Provider>
   );
} 