import { useState, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToDo } from './Types/Types'
import ToDoTable from './Components/ToDoTable/ToDoTable'
import ToDoView from './Views/ToDoView/ToDoView'

const App = memo(() => {
  const [toDo, setToDo] = useState<Array<ToDo>>([])

  return (
    // <Routes>
    //   <Route path="/" element={<ToDoTable />} />
    //   <Route path="/todo/:id" element={<ToDoView />} />
    // </Routes>

    <Routes>
      <Route path="/" element={<ToDoView />}>
        <Route index element={<ToDoView />} />
        <Route path="*" element={<ToDoView />} />
      </Route>
    </Routes>
  )
})

export default App
