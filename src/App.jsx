import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Cards from './components/Menus/Cards'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Banner3 from './components/Banner/Banner3'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>

    <main className='overflow-x-hidden'>

     <Navbar/>
     <HeroSection/>
     <Cards/>
     <Banner/>
     <Banner2/>
     <Banner3/>
     <Footer/>
     







    </main>
    
    
    
    
    
    
    </>
  )
}

export default App