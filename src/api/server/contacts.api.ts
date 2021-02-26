import axios, { AxiosResponse } from 'axios';

import Config from 'lib/Config';

const contactsServer = axios.create({
  baseURL: Config.api_host,
  timeout: 8000,
  headers: {
    accept: 'application/json',
  },
});

const handleResponse = ({ data }: AxiosResponse) => data;

const handleError = (error: Error) => Promise.reject(error);

contactsServer.interceptors.response.use(
  handleResponse,
  handleError,
);

export default contactsServer;
