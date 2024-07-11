import axios from 'axios'; 
import { CategoryItem } from '../types/types'; 

const apiUrl = 
  `${location.protocol}//${location.hostname}:` + 
  `${location.port === '5173' ? '8080' : location.port}` + 
  `${import.meta.env.BASE_URL}/api`

export const fetchCategories = async (): Promise<CategoryItem[]> => { 
  const response = await axios.get(`${apiUrl}/categories`); 
  return response.data as CategoryItem[]; 
};

// add a method fetchBooksByCategoryName that takes a categoryName and requests book items
