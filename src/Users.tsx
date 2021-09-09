import axios from 'axios'
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { SearchResultType, SearchUserType } from './App'
import s from './App.module.css'

type PropsType = {
    selectedUser: SearchUserType | null
    setSelectedUser: Dispatch<SetStateAction<SearchUserType | null>>
    searchTerm: string
}

const Users: React.FC<PropsType> = ({ selectedUser, setSelectedUser, searchTerm }) => {
    const [users, setUsers] = useState<SearchUserType[]>([])

    useEffect(() => {
        axios
            .get<SearchResultType>(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => setUsers(res.data.items))
    }, [searchTerm])

    return (
        <>
            <ul>
                {users.map(u => <li key={u.id} className={selectedUser === u ? s.selected : ''} onClick={() => {
                    setSelectedUser(u)
                }}>
                    {u.login}
                </li>)}
            </ul>
        </>
    )
}

export default Users
