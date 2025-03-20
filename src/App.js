import './App.css';
import About from './Componnets/About';
import Contact from './Componnets/Contact';
import Footer from './Componnets/Footer';
import Header from './Componnets/Header';
import Hero from './Componnets/Hero';
import Project from './Componnets/Project';
import Resume from './Componnets/Resume';
import { app } from "./firebaseConfig";

function App() {
  console.log("Firebase App Initialized:", app);
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
