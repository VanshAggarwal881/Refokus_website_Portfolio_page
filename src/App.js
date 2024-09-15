import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Products from './components/Products'
import Marqueess from './components/Marqueess'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full  bg-zinc-900 text-white'>
      <Navbar></Navbar>
      <Work></Work>
      <Products></Products>
      <Marqueess></Marqueess>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App