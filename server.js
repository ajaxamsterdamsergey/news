const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Это ваш API-ключ. В реальных условиях рекомендуется использовать переменные окружения для хранения секретных данных.
const API_KEY = '4dee1f1bb51240bd88a7bc201b0c99b2';
const baseURL = `https://newsapi.org/v2/`;

app.use(cors());

app.get('/top-headlines', async (req, res) => {
    try {
        const { page = 1, pageSize = 10 } = req.query;
        const response = await axios.get(`${baseURL}top-headlines?country=us&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/search-news', async (req, res) => {
    try {
        const { searchQuery, page = 1, pageSize = 10 } = req.query;
        const response = await axios.get(`${baseURL}everything?q=${searchQuery}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.get('/category-news', async (req, res) => {
    try {
        const { category, page = 1, pageSize = 10 } = req.query;
        const response = await axios.get(`${baseURL}top-headlines?country=de&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
