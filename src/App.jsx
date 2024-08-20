import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Section1Nav/Nav'
import ItContent from './Section2/ItContent'
import AboutMe from './Section3/AboutMe'
import Portfolio from './Section4/Portfolio'
import Views from './Section5/Views'
import Gallery from './Section6/Gallery'
import MoreInfo from './Section7/MoreInfo'
import Form from './Section8/Form'
import Footerroot from './Section9/Footerroot'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <ItContent />
    <AboutMe />
    <Portfolio />
    <Views />
    <Gallery />
    <MoreInfo />
    <Form />
    <Footerroot /> 
    </>
  )
}

export default App
