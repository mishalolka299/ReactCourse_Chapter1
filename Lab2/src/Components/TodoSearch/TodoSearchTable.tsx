import React, { useEffect, useState } from 'react'
import { IToDo } from '../../Store/State/Types/ToDoTypes'
import ToDoTable from '../ToDoTable/ToDoTable'

interface TodoSearchProps {
  toDoList: IToDo[]
}

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
      <ToDoTable toDoList={ToDoFilterList ? ToDoFilterList : []} />
    </div>
  )
}

export default TodoSearchTable
