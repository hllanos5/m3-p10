import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CarritoProvider from './context/CarritoProvider.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </StrictMode>,
)
