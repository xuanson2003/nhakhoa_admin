import React from 'react';
import { Navigate } from 'react-router-dom';
import config from '~/Config';
import isAuthenticated from '~/Utils/auth';

function PrivateRoute({ children }) {
    return isAuthenticated() ? children : <Navigate to={config.routes.login} />;
}

export default PrivateRoute;
