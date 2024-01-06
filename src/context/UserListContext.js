import { createContext, useState } from "react";

export const UserListContext = createContext();


export const UserListContextProvider = ({ children }) => {
        
        const [userList, setuserList] = useState([]);
    
        return <UserListContext.Provider value={{ userList, setuserList }}>
            {children}
        </UserListContext.Provider>
        
    }