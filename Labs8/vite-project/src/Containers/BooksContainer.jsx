import BookCreateForm from '../Components/BookCreateForm/BookCreateForm'
import { useState } from "react";
import SearchBar from '../Components/SearchBar/SearchBar';
import BooksTable from "../Components/BooksTable/BooksTable"
const BooksContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const CreateBook = (book) => {
    console.log(book)
    setBookList([book, ...bookList])
  }
  const DeleteBook = (id) => {
    setBookList(bookList?.filter((td) => td.id !== id));
  };
  const EditBook = (id, newFirstName, newLastName, newPhone) => {
    setBookList(
      bookList.map((book) =>
        book.id === id
          ? { ...book, firstName: newFirstName, lastName: newLastName, phone: newPhone }
          : book
      )
    );
  };

  const listByFilter = bookList.filter((td) =>
    td.phone.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>

      <BookCreateForm CreateBook={CreateBook} />
      <SearchBar
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
        />
      <BooksTable list={listByFilter} DeleteBook={DeleteBook} EditBook={EditBook}/>

    </>
  )
}

export default BooksContainer
