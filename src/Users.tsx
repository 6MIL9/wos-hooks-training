import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SearchResultType, SearchUserType } from './App'
import s from './App.module.css'

type PropsType = {
    selectedUser: SearchUserType | null
    onUserSelect: (user: SearchUserType) => void
    searchTerm: string
}

const Users: React.FC<PropsType> = ({ selectedUser, onUserSelect, searchTerm }) => {
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
                    onUserSelect(u)
                }}>
                    {u.login}
                </li>)}
            </ul>
        </>
    )
}

export default Users
