import React, { useState, useEffect } from 'react';
import '../../App.css';
import './BookList.css';
import { API_URL } from '../../API';
import axios from 'axios';

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt="Book name"></img>
          </div>
          <div>
            <button>Add to Favorites</button>
          </div>
        </div>
      ))}
    </div>
  );
};
