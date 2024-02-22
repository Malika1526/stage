import './App.css';
import Header from "./components/Header";
import MenuFilter from './pages/MenuFilter';
import About from './pages/About';
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Header/>
      <MenuFilter/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
