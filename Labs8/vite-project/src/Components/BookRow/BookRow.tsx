import React, { memo, useState } from 'react'


const BookRow = ({ book , EditBook, DeleteBook}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [bookRowFirstName, setBookRowFirstName] = useState(book.firstName)
  const [bookRowLastName, setBookRowLastName] = useState(book.lastName)
  const [bookRowPhone, setBookRowPhone] = useState(book.phone)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')


  const handleEditClick = () => {
    setIsEditMode(true)
  }

  const handleSaveClick = () => {
    if (bookRowFirstName.trim() === '') {
      setIsError(true)
      setErrorMessage('Title is required')
    } else {
      EditBook(book.id, bookRowFirstName, bookRowLastName, bookRowPhone)
      setIsEditMode(false)
      setIsError(false)
      setErrorMessage('')
    }
  }

  const handleFirstNameInputChange = (e) => {
    if (isEditMode) {
      setBookRowFirstName(e.target.value)
    }
  }
  const handleLastNameInputChange = (e) => {
    if (isEditMode) {
      setBookRowLastName(e.target.value)
    }
  }
  const handlePhoneInputChange = (e) => {
    if (isEditMode) {
      setBookRowPhone(e.target.value)
    }
  }


  const handleDelete = (id) => {
    DeleteBook(id)
  }

  const inputClassName = `form-control ${isError ? 'is-invalid' : ''}`

  return (
    <tr>
       <td>{book.id}</td>
                
             

      {isEditMode ? (
        <>
        <td>
          <input
            type="text"
            value={bookRowFirstName}
            onChange={handleFirstNameInputChange}
            placeholder="Edit Book"
            className={inputClassName}
          />
          {isError && <div className="invalid-feedback">{errorMessage}</div>}
        </td>
        <td>
          <input
            type="text"
            value={bookRowLastName}
            onChange={handleLastNameInputChange}
            placeholder="Edit Book"
            className={inputClassName}
          />
          {isError && <div className="invalid-feedback">{errorMessage}</div>}
        </td>
        <td>
          <input
            type="text"
            value={bookRowPhone}
            onChange={handlePhoneInputChange}
            placeholder="Edit Book"
            className={inputClassName}
          />
          {isError && <div className="invalid-feedback">{errorMessage}</div>}
        </td>
        </>

      ) : (
        <>
        <td>{book.firstName}</td>
        <td>{book.lastName}</td>
        <td>{book.phone}</td>
        </>
      )}
      
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
          onClick={() => handleDelete(book.id)}
        >
          Delete
        </button>
      </td>
    </tr>
    
  )
}
export default BookRow

