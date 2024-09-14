import React, { useState } from 'react'
import { ToDo } from '../../Types/Types'
import useActions from '../../Hooks/useActions'

const TodoCreate = () => {
  const [title, setTitle] = useState('')
  const [checkedCompleted, setCheckedCompleted] = useState(false)

  const { CreateToDo } = useActions()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newToDo = {
      id: Date.now(),
      userId: Date.now(),
      title: title,
      completed: checkedCompleted,
    }
    CreateToDo(newToDo)
  }

  return (
    <div className="border p-2 mb-5">
      <form action="">
        <div className="container">
        <div className="d-flex justify-content-center">
          <span className="display-6">Title: </span>
          <input
            className="form-control w-50 mx-3"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
        </div>

          <div>
            <span>Completed: </span>
            <input
              className="form-check-input mb-3"
              type="checkbox"
              checked={checkedCompleted}
              onChange={(e) => setCheckedCompleted(e.target.checked)}
              name="completed"
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoCreate
