import React from 'react'

interface SearchBarProps {
  searchValue: string
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleResetFilter: () => void
}

const SearchBar = ({
  searchValue,
  handleSearchValueChange,
  handleResetFilter,
}: SearchBarProps) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <input
        className="form-control"
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        placeholder="Search by title"
      />
      <button
        type="button"
        onClick={handleResetFilter}
        className="btn btn-outline-secondary"
      >
        Reset
      </button>
    </div>
  )
}

export default SearchBar
