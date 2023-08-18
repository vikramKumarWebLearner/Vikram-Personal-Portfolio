import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exprience from './components/exprience/Exprience'
import Services from "./components/services/Services";
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from  './components/footer/Footer'
const  App = () =>{
  return (
     <>
           <Header/>
           <Nav/>
           <About/>
           <Exprience/>
           <Services/>
            <Portfolio/>
         <Testimonial/>
         <Contact/>
         <Footer/>
     </>
  )

}
export default App;