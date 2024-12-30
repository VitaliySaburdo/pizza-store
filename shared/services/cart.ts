import { axiosInstance } from './axiosInstance';

export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>('/cart')).data;
};
