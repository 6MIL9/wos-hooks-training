import React, { useState, useEffect } from 'react';
import s from './App.module.css'
import Header from './Header';
import Users from './Users';
import UserDetails from './UserDetails';

export type SearchUserType = {
  login: string
  id: number
}

export type SearchResultType = {
  items: SearchUserType[]
}

export type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}

const App = () => {
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  return (
    <div className={s.container}>
      <div className={s.item}>
        <Header value={searchTerm} onSubmit={setSearchTerm} />
        <Users searchTerm={searchTerm} selectedUser={selectedUser} onUserSelect={setSelectedUser} />
      </div>
      <div className={s.item}>
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default App
