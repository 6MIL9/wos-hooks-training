import axios from 'axios';
import React, { useState, useEffect } from 'react';
import s from './App.module.css'

type SearchUserType = {
  login: string
  id: number
}

type SearchResultType = {
  items: SearchUserType[]
}

type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}

const App = () => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
  const [users, setUsers] = useState<SearchUserType[]>([])
  const [userDetails, setUserDetails] = useState<UserType | null>(null)
  const [tempSearch, setTempSearch] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  useEffect(() => {
    axios
      .get<SearchResultType>(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(res => setUsers(res.data.items))
  }, [searchTerm])

  useEffect(() => {
    if (selectedUser) {
      axios
        .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
        .then(res => setUserDetails(res.data))
    }
  }, [selectedUser])

  return (
    <div className={s.container}>
      <div className={s.item}>
        <div>
          <input placeholder="search" value={tempSearch} onChange={e => setTempSearch(e.currentTarget.value)} />
          <button onClick={() => {
            setSearchTerm(tempSearch)
          }}>find</button>
        </div>
        <ul>
          {users.map(u => <li key={u.id} className={selectedUser === u ? s.selected : ''} onClick={() => {
            setSelectedUser(u)
          }}>
            {u.login}
          </li>)}
        </ul>
      </div>
      <div className={s.item}>
        {(userDetails) && <>
          <h2>{userDetails.login}</h2>
          <div>
            <img src={userDetails.avatar_url} alt="img" />
            <p>Id: {userDetails.id}</p>
            <p>Followers: {userDetails.followers}</p>
          </div>
        </>
        }
      </div>
    </div>
  );
}

export default App
