import { useEffect, useState } from 'react'
import TodoCreate from '../../Components/TodoCreate/TodoCreate'
import TodoSearchTable from '../../Components/TodoSearch/TodoSearchTable'
import useActions from '../../Hooks/useActions'
import { useTypedSelector } from '../../Hooks/useTypedSelector'

const ToDoView = () => {
  const { ToDoAll } = useActions();
  const toDoList = useTypedSelector((state) => state.ToDo.toDoList);

  useEffect(() => {
    ToDoAll();
  }, [])

  return (
    <>
      <TodoCreate />
      <TodoSearchTable toDoList={toDoList ? toDoList : []} />
    </>
  )
}

export default ToDoView
