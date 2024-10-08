import React from 'react'


const SearchBar = ({ searchValue, handleSearchValueChange }) => {
  return (
    <div className="w-100 mb-3">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder="Search by title"
      />
    </div>
  )
}

export default SearchBar
