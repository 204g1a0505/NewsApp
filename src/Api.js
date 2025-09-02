
// import axios from 'axios';

// const API_KEY = 'e4f822c184814c23b1cfb13e457800cf';
// const BASE_URL = 'https://newsapi.org/v2/top-headlines';

// export const fetchNews = async () => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         apiKey: API_KEY,
//         country: 'us',  
//         pageSize: 20,   
//       },
//     });
//     return response.data.articles;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return [];
//   }
// }import axios from 'axios';

import axios from 'axios';

export const fetchNews = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
