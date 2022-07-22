import styled from 'styled-components'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import Docs from './pages/Docs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/features' element={<Features />} />
            <Route path='/docs' element={<Docs />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  background-color: #fff;
  margin: 2rem;
`
