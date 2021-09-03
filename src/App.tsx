import React, { useState } from 'react';
import s from './App.module.css'

const App = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  return (
    <div className={s.container}>
      <div className={s.item}>
        <div>
          <input placeholder="search" /> <button>find</button>
        </div>
        <ul>
          {['Misha', 'Fargo'].map(u => <li className={selectedUser === u ? s.selected : ''} onClick={() => {
            setSelectedUser(u)
            document.title = u
          }}>
            {u}
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
