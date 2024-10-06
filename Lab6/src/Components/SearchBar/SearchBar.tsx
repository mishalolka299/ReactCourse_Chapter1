import React from 'react'

interface SearchBarProps {
  searchValue: string
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({
  searchValue,
  handleSearchValueChange,
}: SearchBarProps) => {
  return (
    <div className="w-100 mb-3">
      <input
        className="form-control"
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder="Search by title"
      />
      
    </div>
  )
}

export default SearchBar
