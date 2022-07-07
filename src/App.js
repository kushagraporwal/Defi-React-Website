import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
    <Navbar />
       <Hero />
    </div>
  );
}

export default App;
