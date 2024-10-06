import { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ToDoView from './Views/ToDoView/ToDoView'

const App = memo(() => {
  return (
    // <Routes>
    //   <Route path="/" element={<ToDoTable />} />
    //   <Route path="/todo/:id" element={<ToDoView />} />
    // <Route index element={<ToDoView />} />
    // <Route path="*" element={<ToDoView />} />
    // </Routes>
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<ToDoView />}></Route>
      </Routes>
    </>
  )
})

export default App
