import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
    <Navbar />
       <Hero />
       <About />
       <Developer/>
       <Subscribe />
    </div>
  );
}

export default App;
