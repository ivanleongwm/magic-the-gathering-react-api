import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MainPage from './pages/MainPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RandomCardPage from './pages/RandomCardPage'

function App() {
  const [count, setCount] = useState(0)
  //React router, if you go to that page then that element shows up, it you don't go to that path then it doesn't show up
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/magic-the-gathering-react-api" element={<MainPage />}/>
        <Route path="/home" element={<MainPage />}/>
        <Route path="/card" element={<RandomCardPage />}/>
        <Route path="/card/:id" element={<RandomCardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
