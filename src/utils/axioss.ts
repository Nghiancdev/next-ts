import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance1 = axios.create({ baseURL: CONFIG.site.serverIkigaiUrl });

axiosInstance1.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export default axiosInstance1;

// ----------------------------------------------------------------------

export const fetcher1 = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance1.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints1 = {
  post: {
    list: '/api/podcast/list',
    // details: '/api/post/details',
    // latest: '/api/post/latest',
    // search: '/api/post/search',
  },
};
