import React from 'react';
import { Box, Select, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const GenreFilter = ({ genres, selectedGenre, onChange }) => (
  <Box mb={4}>
    <Select
      value={selectedGenre || ''}
      onChange={(e) => onChange(e.target.value)}
      displayEmpty
      fullWidth
      startAdornment={<FilterListIcon sx={{ mr: 1, color: '#1565C0' }} />}
      sx={{
        backgroundColor: '#FFF',
        color: '#000',
        borderRadius: '8px',
        mb: 2,
      }}
    >
      <MenuItem value="">
        <em>Todos os Gêneros</em>
      </MenuItem>
      {genres.map((genre) => (
        <MenuItem key={genre.id} value={genre.id}>
          {genre.name}
        </MenuItem>
      ))}
    </Select>
  </Box>
);

export default GenreFilter;
