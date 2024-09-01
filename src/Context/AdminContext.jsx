import React, { createContext, useState } from 'react';
import request from '~/Utils/httpRequest';
import storage from '~/Utils/storage';

const AdminContext = createContext(null);

function AdminContextProvider({ children }) {
    const [user, setUser] = useState({});

    const HandleLogin = async (values) => {
        try {
            const response = await request.post('login', values);

            const responseData = response.data;

            if (responseData.success) {
                storage.set(responseData.token);
                setUser({
                    image: responseData.image_url,
                    email: responseData.email,
                    first_name: responseData.first_name,
                    last_name: responseData.last_name,
                });
                return { success: true };
            } else {
                return { success: false, error_field: responseData.errorField };
            }
        } catch (error) {
            console.log(error);
        }
    };

    const contextValue = { user, setUser, HandleLogin };

    return <AdminContext.Provider value={contextValue}>{children}</AdminContext.Provider>;
}

export { AdminContext, AdminContextProvider };
