import './App.css'
import About from './component/About/About';
import BlobBackground from './component/background/BlobBackground';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import navbar from './component/navbar/navbar';
import Projects from './component/Projects/Projects';
import Tech from './component/Tech/Tech';

function App() {

  return (
    <>
      <BlobBackground/>
      {/* <navbar/> */}
      <navbar/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
