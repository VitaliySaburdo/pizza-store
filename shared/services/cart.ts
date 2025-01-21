import { axiosInstance } from './axiosInstance';
import { Cart } from '@prisma/client';

export const getCart = async (): Promise<Cart> => {
  const { data } = await axiosInstance.get<Cart>('/cart');
  return data;
};
