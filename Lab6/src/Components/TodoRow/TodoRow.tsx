import React, { memo, useState } from 'react'
import useActions from '../../Hooks/useActions'
import { IToDo } from '../../Store/State/Types/ToDoTypes'
import CompletedInput from '../CompletedInput/CompletedInput'

interface TodoRowProps {
  todo: IToDo
}

const TodoRow = memo(({ todo }: TodoRowProps) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [toDoTitle, setToDoTitle] = useState(todo.title)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { EditToDo } = useActions()
  const { DeleteToDo } = useActions()

  const handleEditClick = () => {
    setIsEditMode(true)
  }

  const handleSaveClick = () => {
    if (toDoTitle.trim() === '') {
      setIsError(true)
      setErrorMessage('Title is required')
    } else {
      EditToDo(todo.id, toDoTitle)

      setIsEditMode(false)
      setIsError(false)
      setErrorMessage('')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isEditMode) {
      setToDoTitle(e.target.value)
    }
  }


  const handleDelete = (id: number) => {
    DeleteToDo(id)
  }

  const inputClassName = `form-control ${isError ? 'is-invalid' : ''}`

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.userId}</td>
      {isEditMode ? (
        <td>
          <input
            type="text"
            value={toDoTitle}
            onChange={handleInputChange}
            placeholder="Edit Todo"
            className={inputClassName}
          />
          {isError && <div className="invalid-feedback">{errorMessage}</div>}
        </td>
      ) : (
        <td>{todo.title}</td>
      )}
      <td>
        <CompletedInput todo={todo} />
      </td>
      <td className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={isEditMode ? handleSaveClick : handleEditClick}
        >
          {isEditMode ? 'Save' : 'Edit'}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
})
export default TodoRow

