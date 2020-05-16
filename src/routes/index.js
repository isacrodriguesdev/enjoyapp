import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '~/contexts/auth';

// FOLDER ROUTES

const Routes = () => {

   const { signed } = useAuth();

   return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;