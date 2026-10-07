import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { queryClient } from './lib/queryClient'

// Static previews (no server-side rewrites) build with VITE_HASH_ROUTER=true.
const Router = import.meta.env.VITE_HASH_ROUTER === 'true' ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>,
)
