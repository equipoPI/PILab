import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from "@mui/material/CssBaseline";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const tema1 = createTheme({ //personalizacion de themas y colores
  palette: {
    type: 'light',
    primary: {
      main: '#052b46',
      light: '#457398',
    },
    secondary: {
      main: '#920484',
    },
    background: {
      default: '#ef9611',
      paper: '#ffbc58',
    },
    success: {
      main: '#0ee215',
    },
    warning: {
      main: '#ffff00',
    },
    error: {
      main: '#d50000',
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));   //personalizacion de themas y colores
root.render(
  <React.StrictMode>
    <ThemeProvider theme={tema1}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
