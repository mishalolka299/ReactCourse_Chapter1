import React from 'react'
import { IToDo } from '../../Store/State/Types/ToDoTypes'
import useActions from '../../Hooks/useActions'
interface CompletedInputProps {
  todo: IToDo
}

const CompletedInput = ({ todo }: CompletedInputProps) => {

  const { SetToDoStatus } = useActions()
    const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetToDoStatus(todo.id, e.target.checked)
    }
  
  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompletedChange}
      />
    </>
  )
}

export default CompletedInput
