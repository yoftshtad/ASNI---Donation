import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Secondary_header from './Components/Secondary_header/Secondary_header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import SinglePost from './Pages/Blogs/SinglePost';
import Contact from './Pages/Contact/Contact';
import Donation from './Pages/Donation/Donation';
import Privacy from './Pages/Privacy/Privacy';
import Terms from './Pages/Terms/Terms';
import Gallery from './Pages/Gallery/Gallery'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="nav2">
          <Secondary_header />
          <Navbar />
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<SinglePost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/gallery" element={<Gallery />} /> {/* <-- ADDED THIS ROUTE */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;