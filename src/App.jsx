import React from 'react'
import Home from './Pages/Home'
import { Route, Routes,} from 'react-router'
import Login from './Pages/Login'
import Movies from './Pages/Movies'
import Nav from './Components/Nav'
import Player from './Pages/Player'
const App = () => {
  return (
    <div className='bg-black text-white'>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='*' element={<p>Error Plss go to Home</p>}/>
<Route path='/player/:id' element={<Player/>}/>
      </Routes>
   

    </div>

  )
}

export default App