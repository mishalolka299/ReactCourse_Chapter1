import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ToDo {
  id: number
  title: string
}

function App() {
  const [toDo, setToDo] = useState<Array<ToDo>>([])
  const [title, setTitle] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newToDo = {
      id: Date.now(),
      title: title,
    }
    setToDo([...toDo, newToDo])
  }

  const handleDelete = (id: number) => {
    setToDo(toDo.filter((item) => item.id !== id))
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setToDo(toDo.filter((item) => item.title.includes(searchValue)))
  }

  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            name="title"
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChange}
        name="serch"
      />
      <ul>
        {toDo.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '10px',
              }}
            >
              <h5>{item.title}</h5>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
