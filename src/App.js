// src/App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieListe';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const filterMovies = (filter) => {
    const { title, rating } = filter;
    setFilteredMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          (!rating || movie.rating >= rating)
      )
    );
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: 'New Movie',
            description: 'Description of the new movie.',
            posterURL: 'https://via.placeholder.com/150',
            rating: 3,
          })
        }
      >
        Add Movie
      </button>
    </div>
  );
};

export default App;

