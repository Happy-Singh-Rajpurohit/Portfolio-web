import './App.css'
import About from './component/About/About';
import BlobBackground from './component/background/BlobBackground';
import Navbar from './component/navbar/navbar';
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
    </>
  )
}

export default App
