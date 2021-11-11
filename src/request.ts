import axios, { Method } from 'axios';
import extend from 'lodash/extend';

type Response = object;

type Error = object;

export interface Options {
  data: object;
  before: () => void;
  success: (response: Response) => void;
  error: (error: Error) => void;
  headers: object;
  baseURL: string;
}

export default function request(
  method: Method,
  url: string,
  options: Options,
): Promise<Response> {
  const params = {};
  const { data = {}, headers = {}, baseURL = '' } = options;

  if (method === 'GET') {
    extend(params, data);
  }

  return axios({
    method,
    baseURL,
    url,
    headers,
    params,
    data: method === 'GET' ? {} : data,
  });
}
