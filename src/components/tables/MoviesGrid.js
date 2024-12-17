import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const MoviesGrid = ({ movies, onDetails, onEdit, onDelete }) => (
  <Grid container spacing={3}>
    {movies.map((movie) => (
      <Grid item xs={12} sm={6} md={4} key={movie.id}>
        <MovieCard
          movie={movie}
          onDetails={onDetails}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Grid>
    ))}
  </Grid>
);

export default MoviesGrid;
