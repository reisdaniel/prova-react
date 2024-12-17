import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MovieCard = ({ movie, onDetails, onEdit, onDelete }) => (
  <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
    <CardMedia
      component="img"
      height="300"
      image={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://via.placeholder.com/300x450?text=Imagem+Indisponível'
      }
      alt={movie.title}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://via.placeholder.com/300x450?text=Imagem+Indisponível';
      }}
    />
    <CardContent>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Nota: {movie.vote_average}
      </Typography>
      <Box mt={2}>
        <Tooltip title="Detalhes">
          <IconButton color="primary" onClick={() => onDetails(movie)}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar">
          <IconButton color="primary" onClick={() => onEdit(movie)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Excluir">
          <IconButton color="secondary" onClick={() => onDelete(movie.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </CardContent>
  </Card>
);

export default MovieCard;
