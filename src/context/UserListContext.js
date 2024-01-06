import { createContext, useState } from "react";

export const UserListContext = createContext();


export const UserListContextProvider = ({ children }) => {
        
        const [userList, setuserList] = useState([]);

        const addUser = (user) => {
            setuserList([...userList, user])
        }

        const removeUser = (data) => {
            console.log(data)
            setuserList(userList.filter(user => user.email !== data.email))
        }

        const emptyUserList = () => {
            setuserList([])
        }
    
        return (
            <UserListContext.Provider value={{ userList, addUser, removeUser, emptyUserList }}>
                {children}
            </UserListContext.Provider>
        )
        
    }