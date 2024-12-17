import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import useMovieStore from '../../store/movieStore';

const MovieModal = ({ isOpen, onClose, selectedMovie, isEditing = false }) => {
  const { addMovie, updateMovie } = useMovieStore();
  const [movieData, setMovieData] = useState({
    title: '',
    release_date: '',
    vote_average: '',
    vote_count: '',
    original_language: ''
  });

  useEffect(() => {
    if (selectedMovie) {
      setMovieData(selectedMovie);
    } else {
      setMovieData({
        title: '',
        release_date: '',
        vote_average: '',
        vote_count: '',
        original_language: ''
      });
    }
  }, [selectedMovie]);

  const handleClose = () => {
    onClose(); // Fecha o modal corretamente
  };

  const handleSubmit = () => {
    if (selectedMovie) {
      updateMovie(movieData);
    } else {
      addMovie({ ...movieData, id: Math.random().toString() });
    }
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{selectedMovie ? 'Edit Movie' : 'Add New Movie'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={movieData.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="release_date"
          label="Release Date"
          type="date"
          fullWidth
          variant="standard"
          InputLabelProps={{ shrink: true }}
          value={movieData.release_date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="vote_average"
          label="Rating"
          type="number"
          fullWidth
          variant="standard"
          value={movieData.vote_average}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="vote_count"
          label="Votes"
          type="number"
          fullWidth
          variant="standard"
          value={movieData.vote_count}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="original_language"
          label="Language"
          type="text"
          fullWidth
          variant="standard"
          value={movieData.original_language}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieModal;
