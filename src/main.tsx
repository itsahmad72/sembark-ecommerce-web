// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App />,
  // </StrictMode>

  //   Note
  //   <StrictMode> is commented to avoid double API calls in development.
  // In production, API will run normally. Can re-enable for dev warnings if needed.

)
