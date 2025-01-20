import { Cart } from '@prisma/client';
import { axiosInstance } from './axiosInstance';

export const getCart = async (): Promise<Cart> => {
  return (await axiosInstance.get<Cart>('/cart')).data;
};
