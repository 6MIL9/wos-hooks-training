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
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  return (
    <div className={s.container}>
      <div className={s.item}>
        <Header setSearchTerm={setSearchTerm} />
        <Users searchTerm={searchTerm} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
      <div className={s.item}>
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default App
