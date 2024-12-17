import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const HeroSection = ({ onAddMovie }) => (
  <Box
    sx={{
      position: 'relative',
      height: '400px',
      backgroundImage: 'url(https://image.tmdb.org/t/p/w1280/mc4SBaM9HYV5p2IAhtOvbjK4uSl.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      mb: 4,
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    />
    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Typography variant="h1">Painel de Filmes</Typography>
      <Typography variant="h2">Explore os filmes mais populares!</Typography>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={onAddMovie}
        sx={{ mt: 2 }}
      >
        Adicionar Novo Filme
      </Button>
    </Box>
  </Box>
);

export default HeroSection;
