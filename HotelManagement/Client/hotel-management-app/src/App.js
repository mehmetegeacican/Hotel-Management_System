import './App.css';
import NavBar from './Components/MainComponents/NavBar';
import Footer from './Components/MainComponents/Footer';
import HomePage from './Components/MainComponents/HomePage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <HomePage />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
