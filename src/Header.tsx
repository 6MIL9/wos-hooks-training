import React from 'react'

const Header = ({tempSearch, setTempSearch, setSearchTerm}) => {
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
