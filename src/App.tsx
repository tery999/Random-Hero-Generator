
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import { QuickWithExport } from './Components/Quick/QuickWithExport'
import { Complex } from './Components/Complex/Complex'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Quick' element={<QuickWithExport />} />
        <Route path='Complex' element={<Complex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
