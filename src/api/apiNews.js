import axios from "axios";

const BASE_URl = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URl}search`, {
      params: { apiKey: API_KEY, page_number, page_size, category, keywords },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Ошибка в получении данных")
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URl}latest-news`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Ошибка в получении категорий")
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URl}available/categories`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Ошибка в получении категорий")
  }
};
