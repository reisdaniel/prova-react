import React from 'react';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Dashboard</h1>
        <MoviesList />
      </header>
    </div>
  );
}

export default App;
