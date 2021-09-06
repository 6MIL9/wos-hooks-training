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

const App = () => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
  const [users, setUsers] = useState<SearchUserType[]>([])
  const [tempSearch, setTempSearch] = useState<string>('')

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  const fetchData = (term: string) => {
    axios
      .get<SearchResultType>(`https://api.github.com/search/users?q=${term}`)
      .then(res => setUsers(res.data.items))
  }

  useEffect(() => {
    fetchData('it-kamasutra')
  }, [])

  return (
    <div className={s.container}>
      <div className={s.item}>
        <div>
          <input placeholder="search" value={tempSearch} onChange={e => setTempSearch(e.currentTarget.value)} />
          <button onClick={() => {
            fetchData(tempSearch)
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
        <h2>Username</h2>
        <div>Details</div>
      </div>
    </div>
  );
}

export default App
