import './App.css'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import About from './pages/About'
import Landing from './pages/Landing'
import Footer from './component/Footer/Footer'
import Create from './pages/Create/Create'
import Memory from './pages/Create/Memory'
import Album from './pages/Create/Album'
import MemoriesId from './pages/Memoriesid'
import Gallery from './pages/Gallery'
import GalleryId from './pages/GalleryId'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import { useEffect, useState } from 'react'

function App() {

  const location = useLocation()

  const [isAuthPage, setIsAuthPage] = useState<boolean>(false)

  useEffect(() => {

    const authRoutes =  ['/register', '/login', '/verify', '/forgot-password']
  
    if(authRoutes.includes(location.pathname)){
      setIsAuthPage(true)
    }else {
      setIsAuthPage(false)
    }

  }, [location])

  return (
    <div className='App container w-full'>
      {!isAuthPage && <Navbar/>}
      <main className='min-h-auto'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/gallery/:id' element={<GalleryId/>}/>
          <Route path='/new-memories' element={<Create/>}/>
          <Route path='/new-memories/memory' element={<Memory/>}/>
          <Route path='/new-memories/album' element={<Album/>}/>
          <Route path='/memories/:id' element={<MemoriesId/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
      {!isAuthPage && <Footer/>}
    </div>
  )
}

export default App