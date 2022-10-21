import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ Children }) => {
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default UserContext;