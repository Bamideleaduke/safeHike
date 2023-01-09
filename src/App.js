import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from "./component/navbar/Navbar"
import About from './component/About/About';
import Footer from "./component/Footer/Footer"
// import About from './component/About/';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <Footer />
    </div>
  );
}

export default App;
