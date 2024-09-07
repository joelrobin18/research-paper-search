import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import SavedPapersPage from './components/SavedPapersPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Search Papers</Link></li>
          <li><Link to="/saved">Saved Papers</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/saved" element={<SavedPapersPage />} />
      </Routes>
    </Router>
  );
}


export default App;
