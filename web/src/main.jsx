import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './providers/i18n';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
