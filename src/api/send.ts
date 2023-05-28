import axios from 'axios';
import { axiosBase } from './';

export const sendMessage = async (
  phone: string,
  message: string,
  instance: string,
  token: string
) => {
  try {
    const response = await axiosBase.post(
      `waInstance${instance}/sendMessage/${token}`,
      {
        chatId: `${phone}@c.us`,
        message,
      }
    );
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
