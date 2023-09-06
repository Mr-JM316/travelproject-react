import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portifolio from './Components/Portifolio/Portifolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'
import AddContact from './Components/AddContact'

function App() {

  return (
      <div>
      <Navbar/>
      <Home/>
      
      <Middle/>
      <Destinations/>
      <Portifolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
      <AddContact/>
    </div>
    
  )
}

export default App
