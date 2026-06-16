import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const nums = [1, 2, 3, 4, 5, 6];


const squaredEvens = nums
  .filter(x => x % 2 === 0)   
  .map(x => x * x);           

console.log("Squared evens:", squaredEvens);
