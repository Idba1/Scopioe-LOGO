import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);
    

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    //logout
    const logout = () => {
        setUser(null);
        signOut(auth);
    };

    // ovserver
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        });
    }, []);

    const allvalues = {
        createUser, signInUser, user, loading, logout

    };
    return (
        <div>
            <AuthContext.Provider value={allvalues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;