import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Nav from "./components/navBar/Nav";
import NavMenu from "./components/navBar/NavMenu";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/about/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Lang from "./components/lang/Lang";

const App = () => {
  return (
    <Router>
      <Nav />
      <NavMenu />
      <Lang />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
