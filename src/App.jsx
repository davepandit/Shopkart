import { useState } from 'react'
import Home from './pages/home/Home'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>

      </Routes>
      
    </>
  )
}

export default App
