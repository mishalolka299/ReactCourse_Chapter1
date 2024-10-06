import { useState } from 'react'
import { ToDoTableProps } from '../../Types/Types'
import TodoRow from '../TodoRow/TodoRow'

const toDoTablePageSize = 10

function ToDoTable({ toDoList }: ToDoTableProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const totalPages = Math.ceil(toDoList.length / toDoTablePageSize)

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          className={`page-item${currentPage === i ? ' active' : ''}`}
          key={i}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      )
    }
    return pageNumbers
  }

  return (
    <>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">userId</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {toDoList
            .slice(
              (currentPage - 1) * toDoTablePageSize,
              currentPage * toDoTablePageSize
            )
            .map((todo) => (
              <TodoRow key={todo.id} todo={todo} />
            ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li
            className={`page-item${
              currentPage === totalPages ? ' disabled' : ''
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default ToDoTable
