// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let savedPapers = [];

app.post('/save-paper', (req, res) => {
    const paper = req.body;
    const alreadySaved = savedPapers.some(savedPaper => savedPaper.title === paper.title);
    
    if (alreadySaved) {
      return res.json({ message: 'Paper already saved' });
    }
    
    savedPapers.push(paper);
    return res.json({ message: 'Paper saved successfully' });
  });

app.get('/saved-papers', (req, res) => {
  res.json(savedPapers);
});

app.delete('/remove-paper/:title', (req, res) => {
  const { title } = req.params;
  const initialLength = savedPapers.length;
  savedPapers = savedPapers.filter(paper => paper.title !== title);

  if (savedPapers.length === initialLength) {
    return res.status(404).json({ message: 'Paper not found.' });
  }

  res.json({ message: 'Paper removed successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
