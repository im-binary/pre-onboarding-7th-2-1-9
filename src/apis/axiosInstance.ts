import axios, { AxiosRequestConfig } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AxiosRequestHeaders = AxiosRequestConfig<any>['headers'];

const instance = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api/',
  timeout: 30_000,
});

instance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error?.response?.data?.message != null) {
      return Promise.reject(new Error(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export const get = ({
  url,
  qsData,
  headers,
}: {
  url: string;
  qsData?: Record<string, string>;
  headers?: AxiosRequestHeaders;
}) => {
  const qs = new URLSearchParams(qsData).toString();
  if (qs.length > 0) {
    url = `${url}?${qs}`;
  }

  return instance.get(url, { headers });
};
