import React, { useState, Dispatch, SetStateAction } from 'react'

type PropsType = {
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const Header: React.FC<PropsType> = ({ setSearchTerm }) => {
    const [tempSearch, setTempSearch] = useState<string>('')

    return (
        <div>
            <input placeholder="search" value={tempSearch} onChange={e => setTempSearch(e.currentTarget.value)} />
            <button onClick={() => {
                setSearchTerm(tempSearch)
            }}>find</button>
        </div>
    )
}

export default Header
