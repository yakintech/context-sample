
import React, { useContext } from 'react'
import { UserListContext } from '../context/UserListContext'

function UserListPage() {

    const { userList, removeUser } = useContext(UserListContext)

    const deleteUser = (user) => { 
        removeUser(user)
    }

    return (<>
    <h1>Length: {userList.length} </h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {userList.map(user => (
                <tr key={user.email}>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td><button onClick={() => deleteUser(user)}>Delete</button></td>
                </tr>
            ))}
        </tbody>
    </table>

    </>
    )
}

export default UserListPage