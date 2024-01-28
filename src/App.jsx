import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BookList } from './components/BookList/BookList';
import { Favorites } from './components/Favorites/Favorites';
import { BookDetails } from './components/BookDetails/BookDetails';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
