import React from "react";
import BookRow from "../BookRow/BookRow"

const BooksTable = ({ list, DeleteBook, EditBook }) => {


  
  return (
    <div>
      {list ? (
        <table>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>
                  <button type="button" onClick={() => DeleteToDo(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))} */}

            {list.map((book) => (
              <BookRow key={book.id} book={book} DeleteBook={DeleteBook} EditBook={EditBook} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          No data to display
        </div>
      )}
    </div>
  );
};

export default BooksTable;
