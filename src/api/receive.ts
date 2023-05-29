import axios from 'axios';
import { axiosBase } from './';

export const receiveMessage = async (instance: string, token: string) => {
  try {
    const response = await axiosBase.get(
      `waInstance${instance}/receiveNotification/${token}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
