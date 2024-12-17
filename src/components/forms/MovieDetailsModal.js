import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

const MovieDetailsModal = ({ isOpen, onClose, movie }) => {
  if (!movie) return null; // Garante que o modal só renderize com dados válidos

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{movie.title}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            style={{ marginBottom: '16px', borderRadius: '8px' }}
          />
          <Typography variant="body1" gutterBottom>
            {movie.overview || "No description available."}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetailsModal;
