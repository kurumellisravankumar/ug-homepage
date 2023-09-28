import React from 'react'
//  ----------------------components-------------------
import Header from './components/Header/Header'
import Home from './components/Home_Section/Home'
import About from './components/About_section/About'
import Exam_Explore from './components/ExploreExam/Exam_Explore'
import Course from './components/Courses/Course'
import Contact from './components/Contact/Contact'
import Faq from './components/Faqs/Faq'
import Footer from './components/Footer/Footer'
//  ----------------------commmon css-------------------
import "./app.css"










const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Exam_Explore/>
    <Course/>
<Contact/>
<Faq/>
<Footer/>
  
    </>
  )
}

export default App