import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Projects/Project";
import Home from "./Pages/home/Home";

function App() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
