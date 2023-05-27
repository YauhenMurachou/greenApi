import axios from 'axios';
import { axiosBase } from './';

export const sendMessage = async () => {
  try {
    const response = await axiosBase.post(
      'waInstance1101824470/sendMessage/7eed583a9efe4957b1f0e51572e5f70183ef510536654d4e9a',
      {
        chatId: '393802907975@c.us',
        message: 'tejknst',
      }
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
