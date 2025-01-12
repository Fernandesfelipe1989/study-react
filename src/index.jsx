import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'


const containerApp = document.getElementById('root');

createRoot(containerApp).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
