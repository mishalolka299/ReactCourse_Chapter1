import { useEffect, useState } from 'react';
import useActions from '../../Hooks/useActions';
import { ToDo } from '../../Types/Types';

interface ToDoTableProps {
  toDoList: ToDo[];
}

function ToDoTable({ toDoList }: ToDoTableProps) {
  const [totalCount, setTotalCount] = useState(toDoList.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { DeleteToDo } = useActions();

  useEffect(() => {
    setTotalCount(toDoList.length);
  }, [toDoList]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li className={`page-item${currentPage === i ? ' active' : ''}`} key={i}>
          <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  const handleDelete = (id: number) => {
    DeleteToDo(id);
    const newToDoList = toDoList.filter((item) => item.id !== id);
    setTotalCount(newToDoList.length);
  };


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
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ToDoTable;