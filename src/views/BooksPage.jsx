import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {selectBooks, fetchBooks} from '../store/booksSlice.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {

  const dispatch = useDispatch();
  const pageTitle = "📖 Book List with Router, Redux & Firebase";
  
  const bookStatus = useSelector(selectBooks).status;
  
  useEffect(()=>{
    if(bookStatus == 'idle'){
      dispatch(fetchBooks());
    }
  },[]);
  
  const books = useSelector(selectBooks).books;
  
  return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />
            <div className="books-container">
              { books.length ? 
                <div className="books-list">
                    {books.map(book => 
                    <Book key={book.id} book={book}  />
                  )}
                </div> : bookStatus == 'loading' ? 
                <div>Loading...</div> :
                <div>Your book list is empty. <Link to ="/add-book">Click here to add a new book.</Link></div>
              }
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  