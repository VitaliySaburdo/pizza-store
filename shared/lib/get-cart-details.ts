import { CartDTO } from '../services/dto/cart.dto';
import { axiosInstance } from '../services/axiosInstance';

export const getCartDetails = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get('/cart');
  return data;
};
