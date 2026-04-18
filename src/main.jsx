import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PreferencesProvider } from './context/PreferencesContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <PreferencesProvider>
        <App />
      </PreferencesProvider>
    </LanguageProvider>
  </StrictMode>,
)
