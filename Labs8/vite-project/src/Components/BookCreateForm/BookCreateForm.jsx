import React from 'react'
import { useState } from "react";

const BookCreateForm = ({ CreateBook }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName.trim() === '') {
          alert('Please enter a firstName')
          return
        }
        if (lastName.trim() === '') {
          alert('Please enter a lastName')
          return
        }
        if (phone.trim() === '') {
          alert('Please enter a phone')
          return
        }
        const newBook = {
          id: Date.now(),
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        }
        CreateBook(newBook)
      }
  return (
    <div className="border p-2 mb-5">
      <form action="">
        <div className="container">
        <div className="d-flex justify-content-center">
          <span className="display-6">firstName: </span>
          <input
            className="form-control w-50 mx-3"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
          />
        </div>
        <div className="d-flex justify-content-center">
          <span className="display-6">lastName: </span>
          <input
            className="form-control w-50 mx-3"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
          />
        </div>
        <div className="d-flex justify-content-center">
          <span className="display-6">phone: </span>
          <input
            className="form-control w-50 mx-3"
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
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

export default BookCreateForm
