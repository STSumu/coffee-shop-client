import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <div className='rancho-regular'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
