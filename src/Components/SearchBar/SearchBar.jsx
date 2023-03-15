import React from 'react'

const SearchBar = ({ characters, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault;

    const handleSearchChange = (e) => {
        if(!e.target.value) {
            setSearchResults(characters)
        } else {
            const results = characters.filter(character => {
                return character.name.toLowerCase().includes(e.target.value.toLowerCase())
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