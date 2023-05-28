import axios from 'axios';
import { axiosBase } from './';

export const receiveMessage = async () => {
  try {
    const response = await axiosBase.get(
      'waInstance1101824470/receiveNotification/7eed583a9efe4957b1f0e51572e5f70183ef510536654d4e9a',
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

export const deleteNotification = async (receiptId: number) => {
  try {
    const response = await axiosBase.delete(
      `waInstance1101824470/deleteNotification/7eed583a9efe4957b1f0e51572e5f70183ef510536654d4e9a/${receiptId}`,
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
