import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import MoviesList from './pages/MoviesList'; // Caminho corrigido para a nova estrutura

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reseta os estilos padrão do navegador */}
      <div>
        <MoviesList />
      </div>
    </ThemeProvider>
  );
}

export default App;
