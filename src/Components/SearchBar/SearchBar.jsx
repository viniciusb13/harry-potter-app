import React from 'react'

import './style.css'
const SearchBar = ({ totalResults, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault;

    const handleSearchChange = (e) => {
        if(!e.target.value) {
            setSearchResults(totalResults)
        } else {
            const results = totalResults.filter(totalResults => {
                return totalResults.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setSearchResults(results)
        }
    }

  return (
    <div className="search-wrapper">
        <label htmlFor="search-form">
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for..."
                onChange={handleSearchChange}
            />
        </label>
    </div>
  )
}

export default SearchBar