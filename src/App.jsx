import './App.css'
import About from './component/About/About';
import BlobBackground from './component/background/BlobBackground';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Projects from './component/Projects/Projects';
import Tech from './component/Tech/Tech';

function App() {

  return (
    <>
      <BlobBackground/>
      <Navbar/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
