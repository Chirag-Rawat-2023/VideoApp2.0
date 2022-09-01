import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ddfa9173d8msh449da46ae0a5fa4p150b57jsn331cfe90b5e9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};


export const FetchfromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };