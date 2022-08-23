import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
  AxiosInstance,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const request = async (
  method: AxiosRequestConfig["method"],
  url: string,
  data?: any
): Promise<AxiosResponse<any>> => {
  try {
    const options: AxiosRequestConfig = {
      method,
      data,
      url,
    };

    return await instance.request(options);
  } catch (error) {
    const e = error as AxiosError;
    console.error(error);
    throw error;
  }
};
