import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reseta estilos padrão do navegador */}
      <div>
        <MoviesList />
      </div>
    </ThemeProvider>
  );
}

export default App;
