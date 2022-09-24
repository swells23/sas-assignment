import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ManageBusinessContext } from './components/ManageBusinessContext';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ManageBusinessContext />
  </ThemeProvider>
);
