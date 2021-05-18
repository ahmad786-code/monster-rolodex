import React from 'react'
import './search-box.css'
const SearchBox = ({handleChange, placeholder}) => {
    return (
        <div >
             <input className="search" type="search" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default SearchBox
