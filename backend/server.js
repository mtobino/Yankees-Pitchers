const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { yankeesPitchers, teamPitchingStats, injuredPitchers } = require('./yankeesPitchers');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev')); // 'dev' format for concise logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ yankeesPitchers, teamPitchingStats, injuredPitchers });
});

// Create new pitcher
app.post('/pitchers', (req, res) => {
  const newPitcher = {
    id: Date.now(),
    ...req.body
  };
  yankeesPitchers.push(newPitcher);
  res.status(201).json(newPitcher);
});

// Update pitcher
app.put('/pitchers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = yankeesPitchers.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Pitcher not found' });
  }
  yankeesPitchers[index] = { ...yankeesPitchers[index], ...req.body };
  res.json(yankeesPitchers[index]);
});

// Delete pitcher
app.delete('/pitchers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = yankeesPitchers.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Pitcher not found' });
  }
  yankeesPitchers.splice(index, 1);
  res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
