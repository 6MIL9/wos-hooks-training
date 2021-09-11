import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SearchUserType, UserType } from './App'

type PropsType = {
    selectedUser: SearchUserType | null
}

const UserDetails: React.FC<PropsType> = ({ selectedUser }) => {
    const [userDetails, setUserDetails] = useState<UserType | null>(null)

    useEffect(() => {
        if (selectedUser) {
            axios
                .get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => setUserDetails(res.data))
        }
    }, [selectedUser])

    return (
        <>
            {(userDetails) && <>
                <h2>{userDetails.login}</h2>
                <div>
                    <img src={userDetails.avatar_url} alt="img" />
                    <p>Id: {userDetails.id}</p>
                    <p>Followers: {userDetails.followers}</p>
                </div>
            </>
            }
        </>
    )
}

export default UserDetails
