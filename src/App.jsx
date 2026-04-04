
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
 

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
