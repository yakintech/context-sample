import React, { useContext, useState } from 'react'
import { UserListContext } from '../context/UserListContext'


function AddUser() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")

    //call context
    const { userList, addUser } = useContext(UserListContext)


    //add to userListContext
    const add = () => {
        let newUser = { name, surname, email }
        addUser(newUser)

        //empty inputs
        setName("")
        setSurname("")
        setEmail("")
    }
  return (<>
    <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
        <label>Surname</label>
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
    </div>
    <div>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <button onClick={add}>Add User</button>
    </div>
  </>
  )
}

export default AddUser