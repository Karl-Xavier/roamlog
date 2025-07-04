import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import About from './pages/About'
import Landing from './pages/Landing'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className='App container w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App