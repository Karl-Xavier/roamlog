import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import About from './pages/About'
import Landing from './pages/Landing'
import Footer from './component/Footer/Footer'
import Create from './pages/Create/Create'
import Memory from './pages/Create/Memory'
import Album from './pages/Create/Album'

function App() {
  return (
    <div className='App container w-full'>
      <Navbar/>
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/new-memories' element={<Create/>}/>
          <Route path='/new-memories/memory' element={<Memory/>}/>
          <Route path='/new-memories/album' element={<Album/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App