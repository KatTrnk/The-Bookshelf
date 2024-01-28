import React from 'react';
import './Favorites.css';
import { useAppContext } from '../context/appContext';

export const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log('favrites are', favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      <h2 className="favorites-heading">Your favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3 className="book-title">{book.title}</h3>
            </div>
            <div>
              <img src={book.image_url} alt="Book name"></img>
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>You don't have any favorites yet.</p>
      )}
    </div>
  );
};
