import config from '~/Config';
import Dashbroad from '~/Pages/Dashbroad/Dashbroad';
import Login from '~/Pages/Login/Login';
import Profile from '~/Pages/Profile/Profile';
import Register from '~/Pages/Register/Register';

const publicRoutes = [
    { path: config.routes.login, component: <Login />, layout: null },
    { path: config.routes.login_2, component: <Login />, layout: null },
    { path: config.routes.register, component: <Register />, layout: null },
];

const privateRoutes = [
    { path: config.routes.dashbroad, component: <Dashbroad /> },
    { path: config.routes.patient_list, component: <></> },
    { path: config.routes.doctor_list, component: <></> },
    { path: config.routes.add_doctor, component: <></> },
    { path: config.routes.service_list, component: <></> },
    { path: config.routes.add_service, component: <></> },
    { path: config.routes.profile, component: <Profile /> },
];

export { publicRoutes, privateRoutes };
