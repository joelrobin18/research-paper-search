import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import SearchPage from './components/SearchPage';
import SavedPapersPage from './components/SavedPapersPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/saved" element={<SavedPapersPage />} />
      </Routes>
    </Router>
  );
};


export default App;
