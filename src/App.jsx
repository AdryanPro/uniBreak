import { Route, Routes } from 'react-router-dom'
import HomePage from "./components/homePage"
import './App.css'
import Navbar from './components/navBar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
