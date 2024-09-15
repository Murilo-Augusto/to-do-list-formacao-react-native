import { env } from '@/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.EXPO_PUBLIC_API_URL,
});

if (env.EXPO_PUBLIC_API_DELAY > 0) {
  api.interceptors.response.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * env.EXPO_PUBLIC_API_DELAY)
    );

    return config;
  });
}
