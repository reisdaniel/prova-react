import React from 'react';
import MoviesList from './components/MoviesList';
import MovieFormModal from './components/forms/MovieFormModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Dashboard</h1>
        <MoviesList />
        <MovieFormModal />
      </header>
    </div>
  );
}

export default App;
