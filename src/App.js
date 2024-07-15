// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MovieList from './MovieListe';
import Filter from './Filter';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 5,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E',
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
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilter={filterMovies} />
                <MovieList movies={filteredMovies} />
                <button
                  onClick={() =>
                    addMovie({
                      id: movies.length + 1,
                      title: 'New Movie',
                      description: 'Description of the new movie.',
                      posterURL: 'https://via.placeholder.com/150',
                      rating: 3,
                      trailerLink: 'https://www.youtube.com/embed/example',
                    })
                  }
                >
                  Add Movie
                </button>
              </>
            }
          />
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
