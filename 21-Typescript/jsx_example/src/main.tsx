import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react';



// we have to change this becase in normal jsx,
// Here, if document.getElementById('root') 
// returns null, JavaScript will throw an error at runtime, but it won't complain during compilation
// In TypeScript, we need to ensure that the element exists before trying to use it, preventing potential runtime errors.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element #root not found.");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);


