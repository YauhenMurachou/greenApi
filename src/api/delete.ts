import axios from 'axios';
import { axiosBase } from './';

export const deleteNotification = async (
  receiptId: number,
  instance: string,
  token: string
) => {
  try {
    const response = await axiosBase.delete(
      `waInstance${instance}/deleteNotification/${token}/${receiptId}`,
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
