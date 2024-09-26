import React, { useEffect, useState } from 'react'
import useActions from '../../Hooks/useActions'
import { useTypedSelector } from '../../Hooks/useTypedSelector'
import ResetButton from '../ResetButton/ResetButton'
import SearchBar from '../SearchBar/SearchBar'
import ToDoTable from '../ToDoTable/ToDoTable'

const TodoSearchTable = () => {
  const { ToDoAll } = useActions()

  const [searchValue, setSearchValue] = useState('')
  const toDoList = useTypedSelector((state) => state.ToDo.toDoList)

  useEffect(() => {
    ToDoAll()
  }, [])

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleResetFilter = () => {
    setSearchValue('')
  }

  const filteredList = toDoList.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <SearchBar
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
        />
        <ResetButton handleResetFilter={handleResetFilter} />
      </div>
      <ToDoTable toDoList={filteredList} />
    </div>
  )
}
export default TodoSearchTable
