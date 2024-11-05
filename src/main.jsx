import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global.js'
import router from './routes.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>
)

export default router