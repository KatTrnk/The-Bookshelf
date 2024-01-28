import React, { useState, useEffect } from 'react';
import './BookDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../../API';

export const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="book-details">
      <div className="book-details-title">
        <h2>{book.title}</h2>
        <img src={book.image_url} alt="book cover" />
      </div>
      <div className="book-details-text">
        <h3>Authors</h3>
        <p>{book.authors}</p>
        <h3>Description</h3>
        <p>{book.description}</p>
        <h3>Genres</h3>
        <p>{book.genres}</p>
      </div>
    </div>
  );
};
