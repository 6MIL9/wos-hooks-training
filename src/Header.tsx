import React, { useState, useEffect } from 'react'

type PropsType = {
    value: string
    onSubmit: (value: string) => void
}

const Header: React.FC<PropsType> = ({ onSubmit, value }) => {
    const [tempSearch, setTempSearch] = useState(value)

    useEffect(() => {
        setTempSearch(value)
    }, [value])

    return (
        <div>
            <input placeholder="search" value={tempSearch} onChange={e => setTempSearch(e.currentTarget.value)} />
            <button onClick={() => {
                onSubmit(tempSearch)
            }} disabled={tempSearch === value}>find</button>
        </div>
    )
}

export default Header
