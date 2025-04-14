import { useState } from 'react'
import './App.css'


import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Presentation from './components/presentation/Presentation'
import Features from './components/features/Features'
import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

import '@fortawesome/fontawesome-free/css/all.min.css'; 

function App() {
  return (
    <>

      <Header></Header>    
      <Hero></Hero>
      <Presentation></Presentation>
      <Features></Features> 
      <Reviews></Reviews>
      <Contact></Contact>      
      <Footer></Footer>

           
    </>
  )
}

export default App
