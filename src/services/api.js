import axios from 'axios';
const API_KEY = '4dee1f1bb51240bd88a7bc201b0c99b2';

// Это так же рабочие ключи на случай если количество запросов привысят лимит )

//const API_KEY = 'ef5a84fcee734ec69fec0b1e2c26b010';
//const API_KEY = '57b9854e852a42ba814e7157f19e30de';
//const API_KEY = '20c6088070854cf29d1c0641e33e4cc8';
const baseURL = axios.defaults.baseURL = `https://newsapi.org/v2/`;

export const getTopHeadLines = async (page = 1, pageSize = 10) => {
    const response = await axios.get(
      `${baseURL}top-headlines?country=us&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  };
  
  export const getSearchNews = async (searchQuery, page = 1, pageSize = 10) => {
    const response = await axios.get(
      `${baseURL}everything?q=${searchQuery}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  };
  
  export const getCategoryNews = async (category, page = 1, pageSize = 10) => {
    const response = await axios.get(
      `${baseURL}top-headlines?country=de&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  };
