// nested routes 
// 404 page
// dynamic routing
// useParams() usally parameter leke ata hai yeh
// useNavigate()

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFound from './pages/NotFound'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Footer/>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/courses'element={<Courses/>}/>
{/* dynamic routing */}
    <Route path='/courses/:id' element={<CourseDetails/>}/>  

    <Route path='/product'element={<Product/>}>
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
    </Route>
  
    <Route path='*'element={<NotFound/>}/>

  </Routes>
    </div>
  )
}

export default App
