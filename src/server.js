const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = 'e4f822c184814c23b1cfb13e457800cf';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=20';

// Enable CORS for all origins
app.use(cors());

// API route for frontend
app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}`);
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
