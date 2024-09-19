import React, { useEffect, useState } from 'react'
import { TodoSearchProps } from '../../Types/Types'
import SearchBar from '../SearchBar/SearchBar'
import ToDoTable from '../ToDoTable/ToDoTable'

const TodoSearchTable = ({ toDoList }: TodoSearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [ToDoFilterList, setToDoFilterList] = useState(toDoList)

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    const filteredList = toDoList.filter((toDo) =>
      toDo.title.includes(e.target.value)
    )
    setToDoFilterList(filteredList)
  }

  const handleResetFilter = () => {
    setSearchValue('')
    setToDoFilterList(toDoList)
  }

  useEffect(() => {
    setToDoFilterList(toDoList)
  }, [toDoList])

  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        handleSearchValueChange={handleSearchValueChange}
        handleResetFilter={handleResetFilter}
      />
      <ToDoTable toDoList={ToDoFilterList ? ToDoFilterList : []} />
    </div>
  )
}

export default TodoSearchTable
