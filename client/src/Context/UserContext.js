import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        isUserLoggedIn: false,
        _id:'',
        name: '',
        emailId: '',
        password: '',
        createdTime: '',
        modifiedTime: '',
        text: false
    });

    const updateUser = (name, value) => {
        setUser({ ...user, [name]: value });
    }
    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );

}
export default UserContext;