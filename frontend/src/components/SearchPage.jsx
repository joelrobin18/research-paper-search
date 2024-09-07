import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dummyPapers from '../data/dummyPapers'; 

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [papers, setPapers] = useState(dummyPapers);

  const handleSearch = () => {
    const filteredPapers = dummyPapers.filter(paper =>
      paper.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPapers(filteredPapers);
  };

  const savePaper = async (paper) => {
    try {
      const response = await axios.post('http://localhost:5000/save-paper', paper);
      toast.success(response.data.message); 
    } catch (error) {
      toast.error('Failed to save the paper.'); 
    }
  };

  return (
    <div className="container">
      <h1>Search for Research Papers</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="results">
        {papers.map((paper, index) => (
          <div className="paper-card" key={index}>
            <h3>{paper.title}</h3>
            <p><strong>Authors:</strong> {paper.authors}</p>
            <p><strong>Year:</strong> {paper.year}</p>
            <p><strong>Citations:</strong> {paper.citations}</p>
            <button onClick={() => savePaper(paper)}>Save</button>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SearchPage;
