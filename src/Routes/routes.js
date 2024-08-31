import config from '~/Config';
import Dashbroad from '~/Pages/Dashbroad/Dashbroad';
import Login from '~/Pages/Login/Login';
import Register from '~/Pages/Register/Register';

const publicRoutes = [
    { path: config.routes.login_2, component: <Login />, layout: null },
    { path: config.routes.dashbroad, component: <Dashbroad /> },
    { path: config.routes.login, component: <Login />, layout: null },
    { path: config.routes.register, component: <Register />, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
