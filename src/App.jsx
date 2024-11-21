 import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Founder from './components/Founder'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
   
 function App() {
   return (
     <div> 
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Founder/>
      <Contact/>
      <Footer/>
     </div>
   )
 }
 
 export default App