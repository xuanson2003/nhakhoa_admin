import storage from './storage';

const isAuthenticated = () => {
    return !!storage.get();
};

export default isAuthenticated;
