import { CartDTO } from './dto/cart.dto';
import { axiosInstance } from './axiosInstance';

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>('/cart');
  return data;
};
