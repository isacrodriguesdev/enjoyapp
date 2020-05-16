import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from '~/store/index';
import AuthProvider from '~/contexts/auth';
import Routes from '~/routes';
import getRealm from '~/services/realm';

const App = () => {

  /*  
    AuthProvider é um context api para verificar se 
    o usuario está logado
  */

  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer theme={{ colors: { background: "white" } }}>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}

export default App;