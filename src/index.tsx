import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles, theme} from './utils/ThemeConfig'
import { ThemeProvider } from 'styled-components';
import './shared/app.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <GlobalStyles/>
      <App />
    
    </ThemeProvider>
  </React.StrictMode>
);
