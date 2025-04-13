import './css/App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
