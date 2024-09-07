import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedPapersPage = () => {
  const backend_url = process.env.REACT_APP_BACKEND_URL;

  const [savedPapers, setSavedPapers] = useState([]);

  useEffect(() => {
    const fetchSavedPapers = async () => {
      const response = await axios.get(`${backend_url}/saved-papers`);
      setSavedPapers(response.data);
    };
    fetchSavedPapers();
  }, [backend_url]);

  const removePaper = async (title) => {
    try {
    await axios.delete(`${backend_url}/remove-paper/${title}`);
    setSavedPapers(savedPapers.filter(paper => paper.title !== title));
    toast.success('Paper removed successfully');
    } catch (error) {
      toast.error('Failed to remove the paper.');
    }

  };

  return (
    <div className="container">
      <h1>Saved Papers</h1>
      <div className="results saved-papers">
        {savedPapers.length === 0 ? (
          <p>No saved papers.</p>
        ) : (
          savedPapers.map((paper, index) => (
            <div className="paper-card" key={index}>
              <h3>{paper.title}</h3>
              <p><strong>Authors:</strong> {paper.authors}</p>
              <p><strong>Year:</strong> {paper.year}</p>
              <p><strong>Citations:</strong> {paper.citations}</p>
              <button onClick={() => removePaper(paper.title)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
};

export default SavedPapersPage;
