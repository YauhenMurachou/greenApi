import axios from 'axios';
import { axiosBase } from '.';
import { LoginType } from 'src/types';

export const sendAuthData = async (values: LoginType) => {
  const { instance, token } = values;
  try {
    const response = await axiosBase.get(
      `waInstance${instance}/getStateInstance/${token}`
    );
    return response.status;
  } catch (error) {
    return axios.isAxiosError(error);
  }
};
