import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/repositorio-react' element={<Home />} />
        <Route path='/repositorio-react/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
