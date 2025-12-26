import '@/index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { RouterRenderer } from './router'


export default function App() {
  return (
    <Router>
      <RouterRenderer />
    </Router>
  )
}
